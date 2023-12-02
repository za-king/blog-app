import { db } from "../config/firebase-config";
import { collection, deleteDoc, doc } from "firebase/firestore";



export const useDeleteBlog = () => {
  const deleteBlog = async ( {id} : any) => {

    try {
    
    const collectionRef = collection(db, "blog")
    const blogDocRef = doc(collectionRef ,id)
    await deleteDoc(blogDocRef)
    } catch (error) {
        console.log(error)
    }
    
  };
  return { deleteBlog };
};
