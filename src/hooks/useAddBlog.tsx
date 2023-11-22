import { addDoc,collection ,serverTimestamp} from "firebase/firestore"
import { db } from "../config/firebase-config"
import useGetUserInfo from "./useGetUserInfo"


type UseAddBlogProp = {
    desc : string
    title :string
    view :number
    img :string
}

export const useAddBlog = () => {
    const blogCollectionRef = collection(db , "blog")

    const {userID , userEmail } = useGetUserInfo()

    const addBlog = async({desc ,title , view , img } : UseAddBlogProp) =>{


        await addDoc(blogCollectionRef, {
            userID,
            userEmail ,
            title,
            desc,
            img,
            view,
            createdAt: serverTimestamp()
        })
    }
  return {addBlog}
}
