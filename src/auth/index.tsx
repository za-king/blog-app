import { auth, provider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Layout } from "../components/Layout";
const Auth = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userInfo = {
        userID: result.user.uid,
        name: result.user.displayName,
        profilePhoto: result.user.photoURL,
        userEmail: result.user.email,
        isAuth: true,
      };

      localStorage.setItem("auth", JSON.stringify(userInfo));

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="border-2 rounded-lg p-12 text-center shadow-md">
          <p className="text-xl font-bold">Sign In With Goole to Continue</p>

          <button
            className="flex items-center gap-2 border rounded p-4 mx-auto my-4"
            onClick={signInWithGoogle}
          >
            <FcGoogle />
            Sign In With Google
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
