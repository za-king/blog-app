import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase-config";
import { v4 } from "uuid";
import { db } from "../config/firebase-config";


type UseAddBlogProp = {
  desc: string;
  title: string;
  view: number;
  img: File | null | undefined;
  comments:{userID : string , profilePhoto : string, name : string , userEmail :string, comment : string } []
  user: {userID :string , profilePhoto : string , userEmail :string , name : string} | null 
};

export const useAddBlog = () => {
  const blogCollectionRef = collection(db, "blog");

  const addBlog = async ({ desc, title, view, img ,comments ,user }: UseAddBlogProp) => {
    if (img == null) return;
    const uploadImageRef = ref(storage, `images/${img.name + v4()}`);
    uploadBytes(uploadImageRef, img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url: string) => {
         addDoc(blogCollectionRef, {
          title,
          desc,
          img : url,
          view,
          createdAt: serverTimestamp(),
          comments,
          user
        });
      });
    });
  };
  return { addBlog };
};
