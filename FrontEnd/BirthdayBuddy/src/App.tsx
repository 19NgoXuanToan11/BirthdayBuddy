import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Bounce, ToastContainer } from "react-toastify";

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
import UserInformationPage from "./Web_Application/Customer Page/page/user-information-page/user-information-page";

//import Party Hosts Pages
import CreateFoodMenuPage from "./Web_Application/Party Host Page/components/pages/host-create-food-menu-page/create-food-menu-page";
import HostPartyListPage from "./Web_Application/Party Host Page/components/pages/host-party-list-page/host-party-list-page";
import HostCreatePartyPage from "./Web_Application/Party Host Page/components/pages/host-create-party-page/host-create-party-page";
import HostCreatePartyThemePage from "./Web_Application/Party Host Page/components/pages/host-create-party-theme-page/host-create-party-theme-page";
import HostCreateSpecialServicePage from "./Web_Application/Party Host Page/components/pages/host-create-special-service-page/host-create-special-service-page";
import RestaurantBookingTracking from "./Web_Application/Party Host Page/components/molecules/restaurant-booking-tracking/restaurant-booking-tracking";
import RestaurantBookingSuccess from "./Web_Application/Party Host Page/components/molecules/restaurant-booking-success/restaurant-booking-success";
import HostHomePage from "./Web_Application/Party Host Page/components/pages/host-home-page/host-home-page";

//import Administator Pages

function App() {
    const user = sessionStorage.getItem("loginedUser")
        ? JSON.parse(sessionStorage.getItem("loginedUser"))
        : null;
    console.log(user);
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
                className="toast-content"
                transition={Bounce}
            />
            {
                <Routes>
                    <Route path="/">
                        {user === null ? (
                            <>
                                <Route index element={<GuestHomePage />} />
                                <Route
                                    path="restaurant-list/:id"
                                    element={<GuestRestaurantListPage />}
                                />
                                <Route
                                    path="restaurant-details/:id"
                                    element={<GuestRestaurantDetailsPage />}
                                />
                                <Route
                                    path="register"
                                    element={<RegisterPage />}
                                />
                                <Route
                                    path="forgetpw"
                                    element={<ForgetPassword />}
                                />
                            </>
                        ) : (
                            <>
                                <Route path="login" element={<LoginPage />} />
                                {user.roleId === 1 && <>{/* Admin Page */}</>}
                                {user.roleId === 2 && (
                                    <>
                                        <Route element={<CustomerHome />} />
                                        {/* <Route path="information" element={<UserInformationPage />} />
                    <Route path="restaurant-list" element={<CustomerRestaurantListPage />} />
                    <Route path="restaurant-details/:id" element={<CustomerRestaurantDetailsPage />} />
                    <Route path="check-out" element={<CustomerCheckoutPage />} />
                    <Route path="booking-success" element={<BookingSuccessPage />} />
                    <Route path="booking-information" element={<BookingInformationPage />} />
                    <Route path="booking-list" element={<BookingListPage />} />
                    <Route path="notification" element={<PartyNotification />} /> */}
                                    </>
                                )}
                            </>
                        )}
                    </Route>
                </Routes>
            }
        </>
    );
}

export default App;
