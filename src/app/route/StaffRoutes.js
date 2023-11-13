import { Routes, Route } from "react-router-dom"
import StaffDashboard from "app/components/pages/staff_panel/dashboard"

const StaffRoutes = (
    <Routes>
        <Route path="/staff" element={<StaffDashboard />} />
    </Routes>
)

export default StaffRoutes