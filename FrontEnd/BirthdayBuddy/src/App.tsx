import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import GuestHomePage from "./Web_Application/Guest Page/components/pages/home-page/guest-home-page";
import LoginPage from "./Web_Application/Authorization Page/components/pages/login-page";
import PartyCheckout from "./Web_Application/Guest Page/components/molecules/party-checkout/party-checkout";
import RegisterPage from "./Web_Application/Authorization Page/components/pages/register-page";
import ForgetPassword from "./Web_Application/Authorization Page/components/molecules/forget-password/forgetpw";
import GuestRestaurantListPage from "./Web_Application/Guest Page/components/pages/restaurant-list-page/guest-restaurant-list-page";
import GuestRestaurantDetailsPage from "./Web_Application/Guest Page/components/pages/restaurant-details-page/restaurant-details-page";
import CustomerHome from "./Web_Application/Customer Page/page/home-page/customer-home-page";
import CustomerRestaurantListPage from "./Web_Application/Customer Page/page/restaurant-page/customer-restaurant-page";
import CustomerRestaurantDetailsPage from "./Web_Application/Customer Page/page/customer-restaurant-details-page/customer-restaurant-details-page";

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<GuestHomePage />} />
                <Route path='/restaurant-list' element={<GuestRestaurantListPage />} />
                <Route path='/restaurant-details/:id' element={<GuestRestaurantDetailsPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgetpw" element={<ForgetPassword />} />
                <Route path='/check-out' element={<PartyCheckout />} />
                <Route path='/customer' element={<CustomerHome />} />
                <Route path='/customer/restaurant-list' element={<CustomerRestaurantListPage />} />
                <Route path='/customer/restaurant-details/:id' element={<CustomerRestaurantDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
