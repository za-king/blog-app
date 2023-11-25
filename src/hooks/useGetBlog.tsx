import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import {
  query,
  collection,
  where,
  onSnapshot,
  doc,
  getDocs,
} from "firebase/firestore";
import useGetUserInfo from "./useGetUserInfo";

export const useGetBlog = () => {
  const { userID } = useGetUserInfo();
  const [blogList, setBlogList] = useState<any[]>([]);
  const [allBlogList, setAllBlogList] = useState<any[]>([]);
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

  useEffect(() => {
    getBlogList();
    getAllBlog()
  }, []);

  return { blogList , allBlogList};
};
