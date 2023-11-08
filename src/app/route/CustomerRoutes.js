import { Route } from "react-router-dom"
import CustomerDashboard from "app/components/pages/customer_panel/dashboard"
import Store from "app/components/pages/customer_panel/screens/Store";
import CheckoutScreen from "app/components/pages/customer_panel/screens/CheckoutScreen";
import PaymentScreen from "app/components/pages/customer_panel/screens/PaymentScreen";
import CompleteScreen from "app/components/pages/customer_panel/screens/CompleteScreen";

export const customerRoutes = (
    <Route>
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path={'/store'} element={<Store />} />
        <Route path={'/checkout'} element={<CheckoutScreen />} />
        <Route path={'/payment'} element={<PaymentScreen />} />
        <Route path={'/complete'} element={<CompleteScreen />} />
    </Route>
);