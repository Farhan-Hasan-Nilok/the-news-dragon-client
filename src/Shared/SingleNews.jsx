import { Outlet } from "react-router-dom";

// it is created for rendering login, register, about and career page in a blank page
const SingleNews = () => {
    return (
        <div>
           <Outlet />
        </div>
    );
};

export default SingleNews;