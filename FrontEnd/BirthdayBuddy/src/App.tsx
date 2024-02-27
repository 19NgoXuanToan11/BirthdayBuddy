import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import GuestHomePage from "./Web_Application/Guest Page/components/pages/home-page/guest-home-page";
import LoginPage from "./Web_Application/Authorization Page/components/pages/login-page";
import PartyCheckout from "./Web_Application/Guest Page/components/molecules/party-checkout/party-checkout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<GuestHomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/check-out' element={<PartyCheckout />} />
            </Routes>
        </Router>
    );
}

export default App;
