import { Route } from "react-router-dom"
import Login from "app/components/pages/auth/Login";
import Registration from "app/components/pages/auth/Registration";

const guestRoutes = () => (
    <Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
    </Route>
)

export default guestRoutes