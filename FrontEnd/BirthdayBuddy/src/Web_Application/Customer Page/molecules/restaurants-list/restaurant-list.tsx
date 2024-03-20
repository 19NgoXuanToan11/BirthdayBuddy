import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../../config/axios";

function RestaurantList() {
    const [currentPage, setCurrentPage] = useState(1);
    const restaurantsPerPage = 4;
    const [restaurants, setRestaurants] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState<any>([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await api.get(
                    "http://localhost:8080/api/restaurants/all"
                );
                setRestaurants(response.data);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
        };

        fetchRestaurants();
    }, []);

    useEffect(() => {
        const fetchLoggedInUser = async () => {
            try {
                const user = localStorage.getItem("loggedInUser");
                if (user) {
                    const userData = JSON.parse(user);
                    const userById = await api.get(userData.id);
                    setLoggedInUser(userById);
                } else {
                    toast.error(
                        "User information not found. Please login again."
                    );
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                toast.error("Error fetching user information.");
            }
        };

        fetchLoggedInUser();
    }, []);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Pagination calculation
    const indexOfLastRestaurant = currentPage * restaurantsPerPage;
    const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
    const currentRestaurants =
        restaurants && restaurants.length > 0
            ? restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant)
            : [];

    return (
        <>
            <div className="restaurant-list-container">
                <div className="restaurant-box">
                    <div className="restaurant-list">
                        {currentRestaurants.map((restaurant) => (
                            <div
                                key={restaurant.id}
                                className="restaurant-section-wrapper"
                            >
                                <Link
                                    to={`/customer/restaurant-details/${restaurant.id}`}
                                    className="link-style"
                                >
                                    <div className="restaurant-section">
                                        <img
                                            src="https://i.pinimg.com/564x/38/24/d5/3824d5200274d015fb5b4b6ba83ef574.jpg"
                                            alt="Restaurant"
                                        />
                                        <h2>{restaurant.restaurantName}</h2>
                                        <div className="content">
                                            <p>
                                                Số điện thoại:{" "}
                                                {restaurant.phone}
                                            </p>
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
            {restaurants && restaurants.length > 0 && (
                <Pagination
                    restaurantsPerPage={restaurantsPerPage}
                    totalRestaurants={restaurants.length}
                    paginate={paginate}
                />
            )}
        </>
    );
}

// Pagination component
const Pagination = ({ restaurantsPerPage, totalRestaurants, paginate }) => {
    const pageNumbers = [];

    for (
        let i = 1;
        i <= Math.ceil(totalRestaurants / restaurantsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <button
                            onClick={() => paginate(number)}
                            className="page-link"
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default RestaurantList;
