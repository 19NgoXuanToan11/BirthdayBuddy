import GuestFooterHome from "../../organisms/guest-footer-home/guest-footer-home";
import GuestHomeTemplate from "../../templates/home-template/guest-home";
import GuestHeader from "../../atoms/guest-header/header";

function GuestHomePage() {
    return (
        <>
            <header>
                <GuestHeader />
            </header>
            <div className="guest-body-container">
                <GuestHomeTemplate />
            </div>
            <footer>
                <GuestFooterHome />
            </footer>
        </>
    );
}

export default GuestHomePage;
