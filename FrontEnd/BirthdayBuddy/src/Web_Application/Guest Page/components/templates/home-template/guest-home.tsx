import Introduction from "../../molecules/introduction/introduction";
import PartyInformation from "../../molecules/party-information/party-information";
import { Routes, Route } from "react-router-dom";
import PartyDetail from "../../molecules/party-detail/party-detail";

function GuestHomeTemplate() {
    return (
        <>
            <Introduction />
            <Routes>
                <Route path="/" element={<PartyInformation />} />
                <Route path="/detail/:id" element={<PartyDetail />} />
            </Routes>
        </>
    );
}

export default GuestHomeTemplate;
