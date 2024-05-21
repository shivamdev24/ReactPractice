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
// import SlideShow from "./Components/components/SlideShow.jsx";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <SlideShow />,

    // },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/aboutUs",
                element: <AboutUs />,
            },
            {
                path: "/service",
                element: <Service />,
            },
            {
                path: "/productPortfolio",
                element: <Service />,
            },
            {
                path: "/contact",
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
