import { Outlet } from "react-router-dom";
import Header from "../Shared/Header.jsx";
import LeftNav from "../Shared/LeftNav.jsx";
// import Main from "../Shared/Main.jsx";
import RightNav from "../Shared/RightNav.jsx";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row mt-2 px-5">
                    <div className="col-3 col-sm-3"><LeftNav /></div>
                    <div className="col-6 col-sm-6"><Outlet/></div>   
                     {/* in the outlet the category component will be render according to news category */}
                    <div className="col-3 col-sm-3"><RightNav /></div>
                </div>
            </div>
        </div>
    );
};

export default Home;