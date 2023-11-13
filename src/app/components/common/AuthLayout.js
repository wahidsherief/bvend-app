import { useSelector } from "react-redux";
import {
    useLocation,
    Navigate,
    Outlet
} from "react-router-dom";
import UserLayout from "./UserLayout";

const AuthLayout = () => {
    const { role } = useSelector((state) => state.auth);
    // const role = 'admin'

    const location = useLocation()

    return (
        role ? <UserLayout><Outlet /></UserLayout>
            : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default AuthLayout;