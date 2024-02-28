import { useState } from 'react';
import { listRestaurant } from "../data/ListOfRestaurant.js";
import { Link } from "react-router-dom";
import "./restaurant-list.scss";

function RestaurantList() {
    const [currentPage, setCurrentPage] = useState(1);
    const restaurantsPerPage = 4;

    const indexOfLastRestaurant = currentPage * restaurantsPerPage;
    const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
    const currentRestaurants = listRestaurant.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="restaurant-list-container">
            <div className="restaurant-box">
                <div className="restaurant-list">
                    {currentRestaurants.map((restaurant) => (
                        <div key={restaurant.id} className="restaurant-section-wrapper">
                            <Link to={`/customer/restaurant-details/${restaurant.id}`} className="link-style">
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
                <Pagination
                    restaurantsPerPage={restaurantsPerPage}
                    totalRestaurants={listRestaurant.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

// Pagination component
const Pagination = ({ restaurantsPerPage, totalRestaurants, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default RestaurantList;
