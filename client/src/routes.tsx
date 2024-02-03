import AdminPrivateRoute from "./components/AdminPrivateRoute";
import UserPrivateRoute from "./components/UserPrivateRoute";
import Page404 from "./scenes/Page404";
import AdminDashboard from "./scenes/admin/AdminDashboard";
import AdminLayout from "./scenes/admin/AdminLayout";
import UserDetails from "./scenes/admin/UserDetails";
import AuthLaout from "./scenes/auth/AuthLayout";
import Login from "./scenes/auth/Login";
import Register from "./scenes/auth/Register";
import Contact from "./scenes/home/Contact";
import Home from "./scenes/home/Home";
import HomeLayout from "./scenes/home/HomeLayout";
import Osint from "./scenes/user/Osint";
import UserDashboard from "./scenes/user/UserDashboard";
import UserLayout from "./scenes/user/UserLayout";
import { ReactNode } from "react";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "user",
        element: <UserLayout />,
        auth: true,
        isAdmin: false,
        children: [
          {
            path: "dashboard",
            element: <UserDashboard />,
            auth: true,
            isAdmin: false,
          },
          {
            path: "osint",
            element: <Osint />,
            auth: true,
            isAdmin: false,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminLayout />,
        auth: true,
        isAdmin: true,
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
            auth: true,
            isAdmin: true,
          },
          {
            path: "dashboard/:id",
            element: <UserDetails />,
            auth: true,
            isAdmin: true,
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLaout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

interface Route {
  path: string;
  element: ReactNode;
  auth?: boolean;
  isAdmin?: boolean;
  children?: Route[];
}

// auth:true admin:false ise userPrivateRoute'a sayfayı child olarak verir. auth:true ve admin:true ise sayfayı AdminPrivateRoute'a child olarak verir.
const authMap = (routes: Route[]): Route[] =>
  routes.map((route: Route) => {
    if (route?.auth && !route.isAdmin) {
      route.element = <UserPrivateRoute>{route.element}</UserPrivateRoute>;
    }
    if (route?.auth && route.isAdmin) {
      route.element = <AdminPrivateRoute>{route.element}</AdminPrivateRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

export default authMap(routes);
