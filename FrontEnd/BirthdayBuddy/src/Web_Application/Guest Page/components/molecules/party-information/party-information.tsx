import { Link } from "react-router-dom";
import "./party-information.scss";
import { listParties } from "../data/ListOfParties.js";

function PartyInformation() {
    return (
        <div className="party-information-container">
            <h2>Các gói tiệc</h2>
            <div className="party-list">
                {listParties.map((party) => (
                    <div className="party-section" key={party.id}>
                        <img src={party.imgUrl} alt={party.name} />
                        <div className="upper-box">{party.name}</div>
                        <div className="party-contents">
                            {party.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </div>
                        <div className="under-box">
                            <Link
                                to={`/restaurant-list/`}
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
