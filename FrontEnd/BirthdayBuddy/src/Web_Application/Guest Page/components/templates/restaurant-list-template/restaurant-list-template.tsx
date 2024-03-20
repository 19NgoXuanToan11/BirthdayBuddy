import RestaurantList from "../../molecules/restaurants-list/restaurant-list";
import "./restaurant-list-template.scss";

function RestaurantListTemplate() {
    return (
        <>
            <h1>DANH SÁCH NHÀ HÀNG</h1>
            <div className="restaurant">
                <RestaurantList />
            </div>
        </>
    );
}

export default RestaurantListTemplate;
