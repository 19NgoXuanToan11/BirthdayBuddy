import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
//import Guest Pages
import GuestHomePage from "./Web_Application/Guest Page/components/pages/home-page/guest-home-page";
import GuestRestaurantListPage from "./Web_Application/Guest Page/components/pages/restaurant-list-page/guest-restaurant-list-page";
import GuestRestaurantDetailsPage from "./Web_Application/Guest Page/components/pages/restaurant-details-page/restaurant-details-page";

//import Authorized Pages
import LoginPage from "./Web_Application/Authorization Page/components/pages/login-page";
import RegisterPage from "./Web_Application/Authorization Page/components/pages/register-page";
import ForgetPassword from "./Web_Application/Authorization Page/components/molecules/forget-password/forgetpw";

//import Customer Pages
import CustomerHome from "./Web_Application/Customer Page/page/home-page/customer-home-page";
import CustomerRestaurantListPage from "./Web_Application/Customer Page/page/restaurant-page/customer-restaurant-page";
import CustomerRestaurantDetailsPage from "./Web_Application/Customer Page/page/customer-restaurant-details-page/customer-restaurant-details-page";
import CustomerCheckoutPage from "./Web_Application/Customer Page/page/checkout-page/customer-checkout-page";
import ScanPayment from "./Web_Application/Customer Page/molecules/scan-payment/scan-payment";import PartyBookingInformation from "./Web_Application/Customer Page/molecules/party-booking-information/party-booking-information";
import BookingInformationPage from "./Web_Application/Customer Page/page/booking-information-page/booking-information-page";
import MomoPaymentPage from "./Web_Application/Customer Page/page/momo-payment-page/momo-payment-page";

//import Party Hosts Pages
//import Administator Pages

function App() {
    return (
        <>
        <Router>
            <Routes> 
                <Route path="/" element={<GuestHomePage />} />
                <Route path="/restaurant-list" element={<GuestRestaurantListPage />}/>
                <Route path="/restaurant-details/:id" element={<GuestRestaurantDetailsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgetpw" element={<ForgetPassword />} />
                <Route path='/customer' element={<CustomerHome />} />
                <Route path='/customer/scan-payment' element={<ScanPayment />} />
                <Route path='/customer/restaurant-list' element={<CustomerRestaurantListPage />} />
                <Route path='/customer/restaurant-details/:id' element={<CustomerRestaurantDetailsPage />} />
                <Route path='/customer/check-out' element={<CustomerCheckoutPage />} />
                <Route path='/customer/payment' element={<MomoPaymentPage />} />
                <Route path='/customer/booking-information' element={<BookingInformationPage />} />
            </Routes>
        </Router>
        </>
        
    );
}

export default App;
