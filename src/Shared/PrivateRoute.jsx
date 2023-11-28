/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../AuthContext/UserAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();
    if(loading){
        return <p className="text-center mt-5 py-5">Loading...</p>;
    }

    if(user){
        return children;
    }
    return <Navigate to='../login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;