import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import {
  query,
  collection,
  where,
  onSnapshot,
  doc,
  getDocs,
  getDoc,
  orderBy,
  limit
} from "firebase/firestore";
import useGetUserInfo from "./useGetUserInfo";
import { useAddBlog } from "./useAddBlog";

export const useGetBlog = () => {
  const { userID } = useGetUserInfo();
  const [blogList, setBlogList] = useState<any[]>([]);
  const [allBlogList, setAllBlogList] = useState<any[]>([]);
  const [allBlogListByView, setAllBlogListByView] = useState<any[]>([]);
  const [blogById , setBlogById] = useState<{} |any>({})
  const blogCollectionRef = collection(db, "blog");

  const { updateViewBlog } = useAddBlog();

  const getBlogList = async () => {
    const blogCollectionByIDRef = collection(db, "blog");
    try {
      const dataquery = query(blogCollectionByIDRef, where(`user.userID`, "==", userID));
      onSnapshot(dataquery, (snapshot) => {
        let docs: any[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          
          docs.push({ ...data, id });
        });

        setBlogList(docs);
      });
    } catch (error) {
      console.log(error);
    }
    
  };

  const getAllBlog = async () => {
    const querySnapshot = await getDocs(collection(db, "blog"));
    let docs: any[] = [];
    querySnapshot.forEach((doc) => {

      const data = doc.data();
      const id = doc.id;

      docs.push({ ...data, id });
    });
    setAllBlogList(docs)
  };

  const getAllBlogByView = async () => {
    try {
    const q = query(blogCollectionRef, orderBy("view", "desc"), limit(5));
    onSnapshot(q, (snapshot) => {
      let docs: any[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;

        docs.push({ ...data, id });
        
      });

      setAllBlogListByView(docs)
    });
    } catch (error) {
      
    }
  };


  const getBlogById = async (id : string |undefined) => {
    
    try {
      const docRef :any= doc(db , 'blog' , `${id}`)
      const docSnap = await getDoc(docRef );
      if (docSnap.exists()) {
        const data :any = docSnap.data()
        updateViewBlog({view : data?.view , id})
        setBlogById(data)
        

      } else {
        
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    getBlogList();
    getAllBlog();
    getAllBlogByView()
  }, [getAllBlogByView, getBlogList]);

  return { blogList , allBlogList ,getBlogById ,blogById ,allBlogListByView};
};
