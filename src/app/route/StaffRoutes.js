import { Route } from "react-router-dom"
import StaffDashboard from "app/components/pages/staff_panel/dashboard"

export const staffRoutes = (
    <Route>
        <Route path="/staff" element={<StaffDashboard />} />
    </Route>
);