import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { PrivateRoute } from "./hooks/usePrivateRoute";
import  useGetUserInfo from "./hooks/useGetUserInfo";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute isAuth={true}>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);
