import GuestRestaurantListHeader from "../../atoms/guest-restaurant-list-header/guest-restaurant-list-header";
import GuestFooterHome from "../../organisms/guest-footer-home/guest-footer-home";
import RestaurantListTemplate from "../../templates/restaurant-list-template/restaurant-list-template";

function GuestRestaurantListPage() {
    return (
        <>
            <header>
                <GuestRestaurantListHeader />
            </header>
            <div className="body-container">
                <RestaurantListTemplate />
            </div>
            <footer>
                <GuestFooterHome />
            </footer>
        </>
    );
}

export default GuestRestaurantListPage;
