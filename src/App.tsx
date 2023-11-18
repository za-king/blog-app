
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


import { Home } from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { PrivateRoute } from "./hooks/usePrivateRoute";
import  useGetUserInfo from "./hooks/useGetUserInfo";

function App() {
  const {isAuth } = useGetUserInfo()
  return  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<PrivateRoute isAuth={isAuth}><Dashboard/></PrivateRoute>} />
  </Routes>
</BrowserRouter>
}

export default App;
