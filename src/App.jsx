import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import LaboratorySolutions from "./pages/LaboratorySolutions";
import ProductOutlet from "./pages/productPage/mseProductPage/ProductOutlet";
import ProductOnePage from "./pages/productPage/mseProductPage/ProductOnePage";
import MCOutlet from "./pages/productPage/medicalConsumablesPage/MCOutlet";
import Disposables from "./pages/productPage/medicalConsumablesPage/Disposables";
import RubberProducts from "./pages/productPage/medicalConsumablesPage/RubberProducts";
import BloodCollection from "./pages/productPage/medicalConsumablesPage/BloodCollection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "mse",
        element: <ProductOutlet />,
        children: [
          {
            path: "",
            element: <ProductOnePage />,
          },
          {
            path: "ProductTwo",
            element: <ProductOnePage />,
          },
          {
            path: "ProductThree",
            element: <ProductOnePage />,
          },
        ],
      },
      {
        path: "medical-consumables",
        element: <MCOutlet/>,
        children:[
          {
            path: "",
            element: <Disposables/>,
          },
          {
            path: "rubber-products",
            element: <RubberProducts/>,
          },
          {
            path: "blood-collection",
            element: <BloodCollection/>,
          }
        ]
      },
      {
        path: "Lab-Solutions",
        element: <LaboratorySolutions />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  // Scroll to the top whenever the component re-renders


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
