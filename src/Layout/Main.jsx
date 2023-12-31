import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Outlet />
          <Footer />
      </div>
    );
};

export default Main;