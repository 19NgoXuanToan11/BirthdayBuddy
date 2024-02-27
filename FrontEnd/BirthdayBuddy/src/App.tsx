import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import GuestHomePage from "./Web_Application/Guest Page/components/pages/home-page/guest-home-page";

function App() {
    return (
        <>
            <BrowserRouter>
            {/* <CustomerHome /> */}
                <GuestHomePage />
                {/* <LoginPage/> */}
                {/* <RegisterPage/> */}
                {/* <ForgetPasswordPage /> */}
            </BrowserRouter>
        </>
    );
}

export default App;
