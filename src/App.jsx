import "./App.css";
import Home from "./pages/Home"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./pages/AboutUs";
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
