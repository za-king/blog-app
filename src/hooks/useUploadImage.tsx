import {  ref ,uploadBytes , getDownloadURL} from "firebase/storage";
import { storage } from "../config/firebase-config";
import {v4} from 'uuid'

type UseUploadImageProp = {
    imageUpload: File | null | undefined
}

export const useUploadImage = () => {
    
    const uploadImage =({imageUpload} :UseUploadImageProp) =>{
        if (imageUpload == null) return;
        
        const uploadImageRef = ref(storage ,`images/${imageUpload.name + v4()}`)
        uploadBytes(uploadImageRef, imageUpload).then(() =>{
            alert("image upload")
            // console.log(imageUpload)
            getDownloadURL(uploadImageRef).then((url: string) =>{
                console.log(url)
            } )
        })

        

    }
  return {uploadImage}
}
