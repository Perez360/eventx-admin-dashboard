import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Login = lazy(() => import("../presentation/auth/AuthLogin.tsx"));
const Register = lazy(() => import("../presentation/auth/AuthRegister.tsx"));

const AuthRoutes = {
    path: "/",
    element: <Outlet />,
    children: [
        { path: "/login", element: <Login /> },
        { path: "register", exact: true, element: <Register /> },
    ]
}


export default AuthRoutes;