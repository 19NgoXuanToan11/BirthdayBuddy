import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PartyInformation() {
    const [partyTypes, setPartyTypes] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        const fetchPartyTypes = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/restaurantTypes/all"
                );
                setPartyTypes(response.data);
            } catch (error) {
                console.error("Error fetching party types:", error);
            }
        };

        fetchPartyTypes();
    }, []);

    const handleShowMore = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="party-information-container">
            <h2 className="party-heading">Các gói tiệc</h2>
            <ul className="party-list">
                {partyTypes.map((partyType, index) => (
                    <li key={partyType.typeName} className="party-section">
                        <img
                            src="/src/SWP_RESOURCE/pictures/birthday-restaurant-inside.jpg"
                            alt="Party Type"
                        ></img>
                        <h3 className="party-title">{partyType.typeName}</h3>
                        <div className="party-description">
                            {partyType.description}
                        </div>
                        <div className="under-box">
                            <Link to={`/restaurant-list`} className="view-more">
                                Xem thêm
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PartyInformation;
