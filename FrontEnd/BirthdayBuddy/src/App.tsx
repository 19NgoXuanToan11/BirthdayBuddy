import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import GuestHomePage from "./Web_Application/Guest Page/components/pages/home-page/guest-home-page";
import LoginPage from "./Web_Application/Authorization Page/components/pages/login-page";
import RegisterPage from "./Web_Application/Authorization Page/components/pages/register-page";
import ForgetPasswordPage from "./Web_Application/Authorization Page/components/pages/forgetpassword-page";
import CustomerHome from "./Web_Application/Customer Page/page/home-page/customer-home-page";
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
