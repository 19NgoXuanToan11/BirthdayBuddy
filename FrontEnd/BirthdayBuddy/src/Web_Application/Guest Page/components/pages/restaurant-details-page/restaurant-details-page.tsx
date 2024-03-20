import GuestRestaurantListHeader from "../../atoms/guest-restaurant-list-header/guest-restaurant-list-header";
import PartyDetail from "../../molecules/party-detail/party-detail";
import GuestFooterHome from "../../organisms/guest-footer-home/guest-footer-home";

function GuestRestaurantDetailsPage() {
    return (
        <>
            <header>
                <GuestRestaurantListHeader />
            </header>
            <div>
                <PartyDetail />
            </div>
            <footer>
                <GuestFooterHome />
            </footer>
        </>
    );
}

export default GuestRestaurantDetailsPage;
