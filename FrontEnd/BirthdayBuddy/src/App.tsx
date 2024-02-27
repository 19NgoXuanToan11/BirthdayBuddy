import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import GuestHomePage from "./Web_Application/Guest Page/components/pages/home-page/guest-home-page";
import LoginPage from "./Web_Application/Authorization Page/components/pages/login-page";
import PartyCheckout from "./Web_Application/Guest Page/components/molecules/party-checkout/party-checkout";
import RegisterPage from "./Web_Application/Authorization Page/components/pages/register-page";
import ForgetPassword from "./Web_Application/Authorization Page/components/molecules/forget-password/forgetpw";
import GuestRestaurantListPage from "./Web_Application/Guest Page/components/pages/restaurant-list-page/guest-restaurant-list-page";
import GuestRestaurantDetailsPage from "./Web_Application/Guest Page/components/pages/restaurant-details-page/restaurant-details-page";

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
            </Routes>
        </Router>
    );
}

export default App;
