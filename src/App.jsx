// import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Contact from "./pages/Contact";


import RefurbishedMRI from "./pages/productPage/Refurbished-MRI-CT-Page/RefurbishedMRI";
import MRI_CTProductPage from "./pages/productPage/Refurbished-MRI-CT-Page/MRI_CTProductPage";
import SSProductPage from "./pages/productPage/SoftwareSolutionsPage/SSProductPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ProductPortfolio from "./pages/ProductPortfolio";
import PSA from "./pages/productPage/PSAOxygenPlant/PSA";
import RefurbishedCT from "./pages/productPage/Refurbished-MRI-CT-Page/RefurbishedCT";
import OncoProductPage from "./pages/productPage/OncoPage/OncoProductPage";

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
        path: "Refurbished-CT-MRI-Machines",
        element: <MRI_CTProductPage />,
      },
      {
        path: "Refurbished-CT",
        element: <RefurbishedCT />,
      },
      {
        path: "Refurbished-MRI",
        element: <RefurbishedMRI />,
      },
      {
        path: "Software-Solutions",
        element: <SSProductPage />,
      },
      {
        path: "Onco-Radiations-Products",
        element: <OncoProductPage />,
      },
      {
        path: "PSA-Oxygen-Plant",
        element: <PSA />,
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
