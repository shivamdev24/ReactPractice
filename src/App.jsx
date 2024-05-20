import "./App.css";
import Home from "./pages/Home"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
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
