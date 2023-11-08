import { Route } from "react-router-dom"
import VendorDashboard from "app/components/pages/vendor_panel/dashboard"
import VendorMachineList from "app/components/pages/vendor_panel/machine/VendorMachineList"
import RefillList from "app/components/pages/vendor_panel/machine/RefillList"

export const vendorRoutes = (
    <Route>
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path={'/vendor/machines'} element={<VendorMachineList />} />
        <Route path={'/vendor/refills/:machineID'} element={<RefillList />} />
    </Route>
);