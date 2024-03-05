import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./config/scrollToTop";
import "./App.scss";

// Import Guest Pages
import GuestHomePage from "./Web_Application/Guest Page/components/pages/home-page/guest-home-page";
import GuestRestaurantListPage from "./Web_Application/Guest Page/components/pages/restaurant-list-page/guest-restaurant-list-page";
import GuestRestaurantDetailsPage from "./Web_Application/Guest Page/components/pages/restaurant-details-page/restaurant-details-page";

// Import Authorized Pages
import LoginPage from "./Web_Application/Authorization Page/components/pages/login-page";
import RegisterPage from "./Web_Application/Authorization Page/components/pages/register-page";
import ForgetPassword from "./Web_Application/Authorization Page/components/molecules/forget-password/forgetpw";
import SignUpHostPage from "./Web_Application/Authorization Page/components/pages/signuphost-page";

// Import Customer Pages
import CustomerHome from "./Web_Application/Customer Page/page/home-page/customer-home-page";
import CustomerRestaurantListPage from "./Web_Application/Customer Page/page/restaurant-page/customer-restaurant-page";
import CustomerRestaurantDetailsPage from "./Web_Application/Customer Page/page/customer-restaurant-details-page/customer-restaurant-details-page";
import CustomerCheckoutPage from "./Web_Application/Customer Page/page/checkout-page/customer-checkout-page";
import MomoPaymentPage from "./Web_Application/Customer Page/page/momo-payment-page/momo-payment-page";
import BookingInformationPage from "./Web_Application/Customer Page/page/booking-information-page/booking-information-page";
import BookingSuccessPage from "./Web_Application/Customer Page/page/booking-success-page/booking-success-page";
import BookingListPage from "./Web_Application/Customer Page/page/booking-list-page/booking-list-page";
import PartyNotification from "./Web_Application/Customer Page/molecules/party-notification/party-notification";

//import Party Hosts Pages
import PartyList from "./Web_Application/Host Page/molecules/party-list/party-list";
import CreateParty from "./Web_Application/Host Page/molecules/create-party/create-party";
import CreatePartyTheme from "./Web_Application/Host Page/molecules/create-party-theme/create-party-theme";
import CreateSpecialService from "./Web_Application/Host Page/molecules/create-special-service/create-special-service";
import CreateFoodMenu from "./Web_Application/Host Page/molecules/create-food-menu/create-food-menu";
import RestaurantBookingTracking from "./Web_Application/Host Page/molecules/restaurant-booking-tracking/restaurant-booking-tracking";
import RestaurantBookingSuccess from "./Web_Application/Host Page/molecules/restaurant-booking-success/restaurant-booking-success";

//import Administator Pages

function App() {
    return (
        <Router>
            <ScrollToTop />

            <Routes>
                {/* Guest */}
                <Route path="/" element={<GuestHomePage />} />
                <Route
                    path="/restaurant-list"
                    element={<GuestRestaurantListPage />}
                />
                <Route
                    path="/restaurant-details/:id"
                    element={<GuestRestaurantDetailsPage />}
                />

                {/* Login, Register, Forgot password */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgetpw" element={<ForgetPassword />} />

                <Route path="/signuphost" element={<SignUpHostPage />} />

                {/* Customer */}
                <Route path="/customer" element={<CustomerHome />} />
                <Route
                    path="/customer/restaurant-list"
                    element={<CustomerRestaurantListPage />}
                />
                <Route
                    path="/customer/restaurant-details/:id"
                    element={<CustomerRestaurantDetailsPage />}
                />
                <Route
                    path="/customer/check-out"
                    element={<CustomerCheckoutPage />}
                />
                <Route path="/customer/payment" element={<MomoPaymentPage />} />
                <Route
                    path="/customer/booking-success"
                    element={<BookingSuccessPage />}
                />
                <Route
                    path="/customer/booking-information"
                    element={<BookingInformationPage />}
                />
                <Route
                    path="/customer/booking-list"
                    element={<BookingListPage />}
                />
                <Route
                    path="/customer/notification"
                    element={<PartyNotification />}
                />

                {/* Host */}
                {/* <Route path="/host" element={<PartyList />} /> */}
                <Route path="/host/list-party" element={<PartyList />} />
                <Route path="/host/create-party" element={<CreateParty />} />
                <Route
                    path="/host/create-party/create-party-theme"
                    element={<CreatePartyTheme />}
                />
                <Route
                    path="/host/create-party/create-party-theme/create-special-service"
                    element={<CreateSpecialService />}
                />
                <Route
                    path="/host/create-party/create-party-theme/create-special-service/create-food-menu"
                    element={<CreateFoodMenu />}
                />
                <Route
                    path="/host/restaurant-booking-tracking"
                    element={<RestaurantBookingTracking />}
                />
                <Route
                    path="/host/restaurant-booking-tracking/restaurant-booking-success"
                    element={<RestaurantBookingSuccess />}
                />
            </Routes>
        </Router>
    );
}

export default App;
