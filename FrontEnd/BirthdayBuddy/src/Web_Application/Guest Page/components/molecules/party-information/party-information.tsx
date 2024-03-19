import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./party-information.scss";

function PartyInformation() {
    const [partyData, setPartyData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/restaurantTypes/all')
            .then(response => response.json())
            .then(data => setPartyData(data))
            .catch(error => console.error('Error fetching party data:', error));
    }, []);

    return (
        <div className="party-information-container">
            <h2>Các gói tiệc</h2>
            <div className="party-list">
                {partyData.map((party) => (
                    <div className="party-section" key={party.typeId}>
                        <img src={party.imgLink} alt={party.typeName} />
                        <div className="upper-box">{party.typeName}</div>
                        <div className="party-contents">
                            <p>{party.description}</p>
                        </div>
                        <div className="under-box">
                            <Link
                                to={`/restaurant-list/${party.typeId}`}
                                className="view-more"
                            >
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PartyInformation;
