import Introduction from "../../molecules/introduction/introduction";
import PartyInformation from "../../molecules/party-information/party-information";
import { Routes, Route } from "react-router-dom";
import PartyDetail from "../../molecules/party-detail/party-detail";
import PartyCheckout from "../../molecules/party-checkout/party-checkout";
import RestaurantListTemplate from "../restaurant-list-template/restaurant-list-template";
import LoginPage from "../../../../Authorization Page/components/pages/login-page";
import RegisterPage from "../../../../Authorization Page/components/pages/register-page";
import Register from "../../../../Authorization Page/components/molecules/register/register";
import ForgetPassword from "../../../../Authorization Page/components/molecules/forget-password/forgetpw";

function GuestHomeTemplate() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Introduction />
                            <PartyInformation />
                        </>
                    }
                />
                <Route path="/restaurant-list" element={<RestaurantListTemplate />} />
                <Route path="/restaurant-details/:id" element={<PartyDetail />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/checkout" element={<PartyCheckout />} />
            </Routes>
        </>
    );
}

export default GuestHomeTemplate;
