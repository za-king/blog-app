import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { query, collection, where, onSnapshot, doc } from "firebase/firestore";
import useGetUserInfo from "./useGetUserInfo";

export const useGetBlog = () => {
  const { userID } = useGetUserInfo();
  const [blogList, setBlogList] = useState<any[]>([]);

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

  useEffect(() => {
    getBlogList();
  }, []);

  return { blogList };
};