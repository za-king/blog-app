import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase-config";
import { v4 } from "uuid";
import { db } from "../config/firebase-config";

type UseAddBlogProp = {
  desc: string;
  title: string;
  view: number;
  img: File | null | undefined;
  category:string
  comments: {
    userID: string;
    profilePhoto: string;
    name: string;
    userEmail: string;
    comment: string;
  }[];
  user: {
    userID: string;
    profilePhoto: string;
    userEmail: string;
    name: string;
  } | null;
};

type UseUpdateBlogProp = {
  view: number;
  id: string | undefined;
};

export const useAddBlog = () => {
  const blogCollectionRef = collection(db, "blog");

  const addBlog = async ({
    desc,
    title,
    view,
    img,
    comments,
    user,
    category
  }: UseAddBlogProp) => {
    if (img == null) return;
    const uploadImageRef = ref(storage, `images/${img.name + v4()}`);
    uploadBytes(uploadImageRef, img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url: string) => {
        addDoc(blogCollectionRef, {
          title,
          
          desc,
          img: url,
          view,
          createdAt: serverTimestamp(),
          comments,
          user,
          category
        });
      });
    });
  };

  const updateViewBlog = async ({ view, id }: UseUpdateBlogProp) => {
    try {
      const updateDocRef = doc(db, "blog", `${id}`);
      console.log({id ,view})
      await updateDoc(updateDocRef, { view: (view += 1) });
    } catch (error) {
      console.log(error);
    }
  };

  return { addBlog, updateViewBlog };
};
