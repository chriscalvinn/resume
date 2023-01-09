import { Outlet, Link } from "react-router-dom";
import Navbar from "../Component/navbar";
import Header from "../Component/header";
import Picture from "../Component/Picture";
import Bio from "../Component/Bio";

const Layout = () => {
  return (
    <div className="container-fluid bg-dark text-white px-0">
        <div className="row">
            <Header />
        </div>

        {/*navbar */}
        <Navbar />

        <div className="row mt-4">
            {/*content*/}
            <div className="col-3">
                {/*profile*/}
                <Picture img={process.env.PUBLIC_URL+"/4x6.jpg"}/>
                <Bio/>
            </div>
            <div className="col-9"><Outlet /></div>
        </div>
    </div>
  )
};

export default Layout;