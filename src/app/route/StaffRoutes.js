import { Route } from "react-router-dom"
import StaffDashboard from "app/components/pages/staff_panel/dashboard"

const staffRoutes = () => (
    <Route>
        <Route path="/staff" element={<StaffDashboard />} />
    </Route>
)

export default staffRoutes