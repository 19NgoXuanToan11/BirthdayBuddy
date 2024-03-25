import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./restaurant-list.scss";

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/restaurants/all"
                );
                setRestaurants(response.data);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div className="restaurant-list-container">
            <div className="restaurant-box">
                <div className="restaurant-list">
                    {restaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            className="restaurant-section-wrapper"
                        >
                            <Link
                                to={`/restaurant-details/${restaurant.id}`}
                                className="link-style"
                            >
                                <div className="restaurant-section">
                                    <img
                                        src="https://i.pinimg.com/564x/38/24/d5/3824d5200274d015fb5b4b6ba83ef574.jpg"
                                        alt="restaurant"
                                    ></img>
                                    <h2>{restaurant.restaurantName}</h2>
                                    <div className="content">
                                        <p>Số điện thoại: {restaurant.phone}</p>
                                        <p>Địa chỉ: {restaurant.address}</p>
                                        <p>
                                            Chủ đề bữa tiệc:{" "}
                                            {restaurant.partyTheme}
                                        </p>
                                        <p>
                                            Dịch vụ đặc biệt:{" "}
                                            {restaurant.specialService}
                                        </p>
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
