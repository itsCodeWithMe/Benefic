import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import * as Imports from "./components/Imports.jsx"
import Homepage from "./Pages/Homepage.jsx";
import Aboutpage from "./Pages/Aboutpage.jsx"
const routing=createBrowserRouter([
    {path:"/",element:<App/>,children:[
      {path:"/", element:<Homepage/>},
      {path:"/contact",element:<Imports.Form/>},
      {path:"/about",element:<Aboutpage/>}
    ]},
    { }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routing}/>
  </React.StrictMode>
);