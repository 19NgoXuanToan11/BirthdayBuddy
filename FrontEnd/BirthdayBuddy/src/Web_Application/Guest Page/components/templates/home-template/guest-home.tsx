import Introduction from "../../molecules/introduction/introduction";
import PartyInformation from "../../molecules/party-information/party-information";
import { Routes, Route } from "react-router-dom";

function GuestHomeTemplate() {
    return (
        <>
            <Introduction />
            <Routes>
                <Route path="/" element={<PartyInformation />} />
            </Routes>
        </>
    );
}

export default GuestHomeTemplate;
