import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import GuestHomePage from "./Web_Application/Guest Page/components/pages/home-page/guest-home-page";

function App() {
    return (
        <>
            <BrowserRouter>
                <GuestHomePage />
            </BrowserRouter>
        </>
    );
}

export default App;
