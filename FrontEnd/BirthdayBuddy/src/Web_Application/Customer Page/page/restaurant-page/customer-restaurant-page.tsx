import CustomerFooterHome from "../../organisms/customer-footer-home/customer-footer-home"
import CustomerHeaderHome from "../../organisms/customer-header-home/customer-header-home"
import RestaurantListTemplate from "../../template/restaurant-list-template/restaurant-list-template"

function CustomerRestaurantListPage() {
    return (
        <>
            <header>
                <CustomerHeaderHome />
            </header>
            <div className="body-container">
                <RestaurantListTemplate />
            </div>
            <footer>
                <CustomerFooterHome />
            </footer>
        </>

    )
}

export default CustomerRestaurantListPage