import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

Outlet;

function Layout() {
    return (
        <div>
            <div >
                <Header />
                    <Navbar />
                {/* <div className="absolute w-full z-50">
                </div> */}
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
