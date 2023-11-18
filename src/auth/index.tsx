import {auth , provider} from "../config/firebase-config"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom";
const Auth = () => {

    const navigate = useNavigate()
    const signInWithGoogle = async() =>{
        const result = await signInWithPopup(auth, provider)
        const userInfo = {
            userID : result.user.uid,
            name : result.user.displayName,
            profilePhoto : result.user.photoURL,
            isAuth : true
        }
        localStorage.setItem("auth" , JSON.stringify(userInfo))

        navigate("/dashboard")
    }

    
  return (
    <div>
      <p>Sign In With Goole to Continue</p> 
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default Auth;
