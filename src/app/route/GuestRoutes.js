import { Route } from "react-router-dom"
import Login from "app/components/pages/auth/Login";
import Registration from "app/components/pages/auth/Registration";

export const guestRoutes = (
    <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
    </Route>
)
