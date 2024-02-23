import Introduction from "../../molecules/introduction/introduction";
import PartyInformation from "../../molecules/party-information/party-information";
import { Routes, Route } from "react-router-dom";
import PartyDetail from "../../molecules/party-detail/party-detail";
import PartyCheckout from "../../molecules/party-checkout/party-checkout";

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
                <Route path="/detail/:id" element={<PartyDetail />} />
                <Route path="/checkout" element={<PartyCheckout />} />
            </Routes>
        </>
    );
}

export default GuestHomeTemplate;