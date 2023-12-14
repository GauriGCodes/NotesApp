import React from "react";
import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";
import Home from "./components/Home.js";
import Error from "./components/error.js";
import Login from "./components/login.js";
import Landing from "./components/Landing.js";
import Register from "./components/Register.js";
import Notes from "./components/Notes.js";
import './App.css';


const AppRoutes = () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Landing />
          },
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'register',
            element: <Register />
          },
          {
            path:'notes',
            element:<Notes/>
          }
        ]
      }
    ]);
  
    return <RouterProvider router={router} />;
  };

function App() {
    return (
          <AppRoutes />
      );
    
}

export default App;
