import AdminPrivateRoute from "./components/AdminPrivateRoute";
import UserPrivateRoute from "./components/UserPrivateRoute";
import Page404 from "./pages/Page404";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import UserDetails from "./pages/admin/UserDetails";
import AuthLaout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Contact from "./pages/home/Contact";
import Home from "./pages/home/Home";
import HomeLayout from "./pages/home/HomeLayout";
import Osint from "./pages/user/Osint";
import UserDashboard from "./pages/user/UserDashboard";
import UserLayout from "./pages/user/UserLayout";
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
