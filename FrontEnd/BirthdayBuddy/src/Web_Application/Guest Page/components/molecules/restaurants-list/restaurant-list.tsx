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
                                    <img src="https://i.pinimg.com/564x/38/24/d5/3824d5200274d015fb5b4b6ba83ef574.jpg"></img>
                                    <h2>{restaurant.restaurantName}</h2>
                                    <div className="content">
                                        <p>Phone: {restaurant.phone}</p>
                                        <p>Address: {restaurant.address}</p>
                                        <p>Type: {restaurant.typeId}</p>
                                        <p>
                                            Party Theme: {restaurant.partyTheme}
                                        </p>
                                        <p>
                                            Special Service:{" "}
                                            {restaurant.specialService}
                                        </p>
                                        <p>
                                            Start Date:{" "}
                                            {new Date(
                                                restaurant.startDate
                                            ).toLocaleDateString()}
                                        </p>
                                        <p>
                                            End Date:{" "}
                                            {new Date(
                                                restaurant.endDate
                                            ).toLocaleDateString()}
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
