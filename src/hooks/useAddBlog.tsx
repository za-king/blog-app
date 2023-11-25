import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase-config";
import { v4 } from "uuid";
import { db } from "../config/firebase-config";
import useGetUserInfo from "./useGetUserInfo";

type UseAddBlogProp = {
  desc: string;
  title: string;
  view: number;
  img: File | null | undefined;
};

export const useAddBlog = () => {
  const blogCollectionRef = collection(db, "blog");

  const { userID, userEmail } = useGetUserInfo();

  const addBlog = async ({ desc, title, view, img }: UseAddBlogProp) => {
    if (img == null) return;
    const uploadImageRef = ref(storage, `images/${img.name + v4()}`);
    uploadBytes(uploadImageRef, img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url: string) => {
         addDoc(blogCollectionRef, {
          userID,
          userEmail,
          title,
          desc,
          img : url,
          view,
          createdAt: serverTimestamp(),
        });
      });
    });
  };
  return { addBlog };
};
