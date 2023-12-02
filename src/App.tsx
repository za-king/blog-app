
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


import { Home } from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AddBlog from "./Pages/AddBlog";
import { PrivateRoute } from "./hooks/usePrivateRoute";
import  useGetUserInfo from "./hooks/useGetUserInfo";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import BlogById from "./Pages/BlogById";

function App() {
  const {isAuth } = useGetUserInfo()
  return  <BrowserRouter>
  <Routes>
    <Route  path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About />} />
    <Route path="/dashboard" element={<PrivateRoute isAuth={isAuth}><Dashboard/> </PrivateRoute>} />
    <Route path="/addblog" element={<PrivateRoute isAuth={isAuth}> <AddBlog/></PrivateRoute>} />
    <Route path="/blog/:id" element={<BlogById />} />
  </Routes>
</BrowserRouter>
}

export default App;
