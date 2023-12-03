import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import {
  collection, 
  
  getDocs,
} from "firebase/firestore";

export const useGetCategories = () => {

  const [categoryList  , setCategoryList] = useState<any>([])

    const addCategories = () =>{

    }

    const getAllCategories = async() => {
      const querySnapshot = await getDocs(collection(db, "category"));
      let docs: any[] = [];
      querySnapshot.forEach((doc) => {
  
        const data = doc.data();
        const id = doc.id;
  
        docs.push({ ...data, id });
      });
      setCategoryList(docs)
    }

    const deleteCategories = () =>{

    }

    const updateCategories =() =>{

    }

    useEffect(() => {
      getAllCategories();
      
    }, []);
  return (
    { categoryList,addCategories , getAllCategories , deleteCategories, updateCategories}
  )
}
