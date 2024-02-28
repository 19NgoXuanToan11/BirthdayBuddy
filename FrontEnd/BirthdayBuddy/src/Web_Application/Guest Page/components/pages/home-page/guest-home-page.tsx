import GuestFooterHome from "../../organisms/guest-footer-home/guest-footer-home";
import GuestHomeTemplate from "../../templates/home-template/guest-home";
import GuestHeaderHome from "../../organisms/guest-header-home/guest-header-home";

function GuestHomePage() {
    return (
        <>
            <header>
                <GuestHeaderHome />
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
