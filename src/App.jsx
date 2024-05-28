// import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ProductOutlet from "./pages/productPage/Refurbished-MRI-CT-Page/ProductOutlet";
import SSOutlet from "./pages/productPage/SoftwareSolutionsPage/SSOutlet";
import HMS from "./pages/productPage/SoftwareSolutionsPage/HMS";
import EHR from "./pages/productPage/SoftwareSolutionsPage/EHR";
import MedicalBilling from "./pages/productPage/SoftwareSolutionsPage/MedicalBilling";
import RefurbishedMRI from "./pages/productPage/Refurbished-MRI-CT-Page/RefurbishedMRI";
import MRI_CTProductPage from "./pages/productPage/Refurbished-MRI-CT-Page/MRI_CTProductPage";
import SSProductPage from "./pages/productPage/SoftwareSolutionsPage/SSProductPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ProductPortfolio from "./pages/ProductPortfolio";
import PSA from "./pages/productPage/PSAOxygenPlant/PSA";
import RefurbishedCT from "./pages/productPage/Refurbished-MRI-CT-Page/RefurbishedCT";
import Telemedicine from "./pages/productPage/SoftwareSolutionsPage/Telemedicine";
import RadiationSafety from "./pages/productPage/OncoPage/RadiationSafety";
import RadiationPlanning from "./pages/productPage/OncoPage/RadiationPlanning";
import LinearAccelerator from "./pages/productPage/OncoPage/LinearAccelator";
import OncoProductPage from "./pages/productPage/OncoPage/OncoProductPage";
import OncoOutlet from "./pages/productPage/OncoPage/OncoOutlet";

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
        element: <ProductOutlet />,
        children: [
          {
            path: "",
            element: <MRI_CTProductPage/>,
          },
          {
            path: "Refurbished-CT",
            element: <RefurbishedCT/>,
          },
          {
            path: "Refurbished-MRI",
            element: <RefurbishedMRI/>,
          },
        ],
      },
      {
        path: "Software-Solutions",
        element: <SSOutlet />,
        children: [
          {
            path: "",
            element: <SSProductPage />,
          },
          {
            path: "Hospital-Management-System",
            element: <HMS />,
          },
          {
            path: "Electronic-Health-Records",
            element: <EHR/>,
          },
          {
            path: "Medical-Billing",
            element: <MedicalBilling />,
          },
          {
            path: "Telemedicine",
            element: <Telemedicine />,
          }
        ],
      },
      {
        path: "Onco-Radiations-Products",
        element: <OncoOutlet />,
        children: [
          {
            path: "",
            element: <OncoProductPage />,
          },
          {
            path: "Linear-Accelerator",
            element: <LinearAccelerator />,
          },
          {
            path: "Radiation-Planning-Software",
            element: <RadiationPlanning />,
          },
          {
            path: "Radiation-Safety-Accessories",
            element: <RadiationSafety />,
          }
        ]
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
