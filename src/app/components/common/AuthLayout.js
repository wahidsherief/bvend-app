import { useSelector } from "react-redux";
import {
    useLocation,
    Navigate,
    Outlet
} from "react-router-dom";
import UserLayout from "./UserLayout";
import { getAuthRole } from "services/AuthService";

const AuthLayout = () => {
    const role = getAuthRole()

    const location = useLocation()

    return (
        role ? <UserLayout><Outlet /></UserLayout>
            : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default AuthLayout;