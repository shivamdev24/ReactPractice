// import React, { useEffect } from "react";
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
import Ortho from "./pages/productPage/mseProductPage/Ortho";
import Diagno from "./pages/productPage/mseProductPage/Diagno";
import MaseProductPage from "./pages/productPage/mseProductPage/MaseProductPage";
import MscProductPage from "./pages/productPage/medicalConsumablesPage/MscProductPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ProductPortfolio from "./pages/ProductPortfolio";

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
        path: "productPortfolio",
        element: <ProductPortfolio />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms-condition",
        element: <TermsConditions />,
      },
      {
        path: "mseProduct",
        element: <ProductOutlet />,
        children: [
          {
            path: "",
            element: <MaseProductPage />,
          },
          {
            path: "MedicalFurniture",
            element: <ProductOnePage />,
          },
          {
            path: "ortho",
            element: <Ortho />,
          },
          {
            path: "diagno",
            element: <Diagno />,
          },
        ],
      },
      {
        path: "medical-consumables",
        element: <MCOutlet />,
        children: [
          {
            path: "",
            element: <MscProductPage />,
          },
          {
            path: "medical-disposables",
            element: <Disposables />,
          },
          {
            path: "rubber-products",
            element: <RubberProducts />,
          },
          {
            path: "blood-collection",
            element: <BloodCollection />,
          },
        ],
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
      <div className="text-black">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
