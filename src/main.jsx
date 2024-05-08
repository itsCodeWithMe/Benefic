import React from "react";
import ReactDOM from "react-dom/client";
import * as Imports from "./components/Imports.jsx"
import App from "./App.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Aboutpage from "./Pages/Aboutpage.jsx"
import Ourservices from "./Pages/Ourservices.jsx"
import Uiuxdesign from "./Pages/ui-ux-designer.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const routing=createBrowserRouter([
  {path:"/",element:<App/>,children:[
    {path:"/", element:<Homepage/>},
    {path:"/contact",element:<Imports.Banner/>},
    {path:"/about",element:<Aboutpage/>},
    {path:"/services",element:<Ourservices/>},
    {path:"/ui-ux-designer",element:<Uiuxdesign/>}
  ]}
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routing}/>
  </React.StrictMode>
);

