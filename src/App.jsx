import "./App.css";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
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

// import SlideShow from "./Components/components/SlideShow.jsx";

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
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
