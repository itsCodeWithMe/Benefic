import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import * as Imports from "./components/Imports.jsx"
import Homepage from "./Pages/Homepage.jsx";
import ContactPage
 from "./Pages/ContactPage.jsx";
const routing=createBrowserRouter([
    {path:"/",element:<App/>,children:[
      {path:"/", element:<Homepage/>},
      {path:"/contact-us",element:<ContactPage/>},
      {path:"/contact",element:<Imports.Form/>}
    ]},
    { }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routing}/>
  </React.StrictMode>
);
