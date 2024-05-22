import "./App.css";
import Home from "./pages/Home"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

import LaboratorySolutions from "./pages/LaboratorySolutions";

import ProductOutlet from "./pages/productPage/mseProductPage/ProductOutlet";
import ProductOnePage from "./pages/productPage/mseProductPage/ProductOnePage";

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
                path: "/productPortfolio",
                element: <LaboratorySolutions/>,
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
