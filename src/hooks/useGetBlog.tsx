import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import {
  query,
  collection,
  where,
  onSnapshot,
  doc,
  getDocs,
  getDoc
} from "firebase/firestore";
import useGetUserInfo from "./useGetUserInfo";

export const useGetBlog = () => {
  const { userID } = useGetUserInfo();
  const [blogList, setBlogList] = useState<any[]>([]);
  const [allBlogList, setAllBlogList] = useState<any[]>([]);
  const [blogById , setBlogById] = useState<{} |any>({})
  const blogCollectionRef = collection(db, "blog");

  const getBlogList = async () => {
    try {
      const dataquery = query(blogCollectionRef, where("userID", "==", userID));
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


  const getBlogById = async (id : string |undefined) => {
    
    try {
      const docRef :any= doc(db , 'blog' , `${id}`)
      const docSnap = await getDoc(docRef );
      if (docSnap.exists()) {
        const data :any = docSnap.data()
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
    
  }, []);

  return { blogList , allBlogList ,getBlogById ,blogById};
};
