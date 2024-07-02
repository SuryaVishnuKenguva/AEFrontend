import React, { useState, createContext } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import Tournament from "./pages/Tournament/Tournament";
import About from "./pages/About/About";
import Signin from "./RegisterAndLogin/Signin/Signin";
import Register from "./RegisterAndLogin/Register/Register";
import Contact from "./pages/Contact/Contact";
import Ongoing from "./pages/Tournament/OnGoing/Ongoing";
import Upcoming from "./pages/Tournament/Upcoming/Upcoming";
import Profile from "./pages/Profile/Profile";
import { DataProvider } from "./Context/DataContext";
export const Appcontext=createContext();
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/tournament",
      element: <Tournament />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/ongoing",
      element: <Ongoing />,
    },
    {
      path: "/upcoming",
      element: <Upcoming />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path:"/profile",
      element:<Profile/>
    }
  ]);

  return(
    <DataProvider>
       <RouterProvider router={router} />
    </DataProvider>
  )
};

export default App;
