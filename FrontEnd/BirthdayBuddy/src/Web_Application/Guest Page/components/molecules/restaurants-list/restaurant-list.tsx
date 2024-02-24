import "./restaurant-list.scss";
import { listRestaurant } from "../data/ListOfRestaurant.js";
import SearchFilter from "../search-filter/search-filter.js";
import { Link } from "react-router-dom";

function RestaurantList() {
    return (
        <div className="restaurant-list-container">
            <h1>Danh sách nhà hàng</h1>
            <div className="restaurant-box">
                <div className="search-filter">
                    <SearchFilter />
                </div>
                <div className="restaurant-list">
                    {listRestaurant.map((restaurant) => (
                        <div key={restaurant.id} className="restaurant-section-wrapper">
                            <Link to={`restaurant-details/${restaurant.id}`} className="link-style">
                                <div className="restaurant-section">
                                    <img src={restaurant.imgUrl} alt={restaurant.name} />
                                    <div className="restaurant-contents">
                                        <h2>{restaurant.name}</h2>
                                        {restaurant.description.map((desc, index) => (
                                            <li key={index}>{desc}</li>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default RestaurantList;
