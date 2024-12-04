import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;