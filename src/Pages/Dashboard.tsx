import { Layout } from "../components/Layout";
import  useGetUserInfo from "../hooks/useGetUserInfo";
import {auth } from "../config/firebase-config"
import {signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { query , collection, where ,onSnapshot, doc} from "firebase/firestore";
function Dashboard() {
  const { name, profilePhoto,userID } = useGetUserInfo();

  const [blogList , setBlogList] = useState<string[]>([])

  const blogCollectionRef = collection(db , "blog")

  const getBlogList = async() =>{

    try {
      const dataquery  = query(blogCollectionRef ,where("userID","==" ,userID))
    onSnapshot(dataquery, (snapshot) =>{
      let docs :any[] = [];
      snapshot.forEach((doc) =>{
      const data = doc.data();
      const id = doc.id
      
      docs.push({...data,id} )
      })

      setBlogList(docs)
    })
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() =>{

    

    getBlogList()

  },[])

  console.log(blogList)

  const navigate = useNavigate()
  const signOutWithGoogle = async() =>{
     try {
        await signOut(auth)
        localStorage.removeItem("auth")
        navigate("/login")
     } catch (error) {
        console.log(error)
     }
  }
  return (
    <Layout>
      <div className="h-screen">
        <div className="container grid grid-cols-4">
          <div className="border  ">
            <img src={profilePhoto} alt="" className="rounded-full" />
            {name}

            <button className="bg-red-300" onClick={signOutWithGoogle}>sign Out</button>


          </div>
          <div className="border  col-span-3">right</div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
