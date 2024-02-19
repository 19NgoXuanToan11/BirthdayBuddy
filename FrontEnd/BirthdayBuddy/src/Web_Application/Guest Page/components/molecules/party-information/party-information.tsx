import { Link } from "react-router-dom";
import "./party-information.scss";

export const parties = [
    {
        id: 1,
        name: "Tiệc sinh nhật trong nhà",
        imgUrl: "../../../../../../src/SWP_RESOURCE/pictures/pool-party.jpg",
        description: [
            "Phòng tiệc có sức chứa từ 20 - 50 người",
            "Chủ đề trang trí đa dạng",
            "Dịch vụ đặc biệt",
            "Giá cả hợp lí, phù hợp",
            "Cam kết mang lại bữa tiệc đáng nhớ cho bé",
        ],
    },
    {
        id: 2,
        name: "Tiệc sinh nhật tại gia",
        imgUrl: "../../../../../../src/SWP_RESOURCE/pictures/home-birthday.jpg",
        description: [
            "Giờ giấc linh động",
            "Chủ đề trang trí đa dạng",
            "Dịch vụ đặc biệt",
            "Giá cả hợp lí, phù hợp",
            "Cam kết mang lại bữa tiệc đáng nhớ cho bé",
        ],
    },
    {
        id: 3,
        name: "Tiệc sinh nhật tại gia",
        imgUrl: "../../../../../../src/SWP_RESOURCE/pictures/birthday-restaurant-inside.jpg",
        description: [
            "Giờ giấc linh động",
            "Chủ đề trang trí đa dạng",
            "Dịch vụ đặc biệt",
            "Giá cả hợp lí, phù hợp",
            "Cam kết mang lại bữa tiệc đáng nhớ cho bé",
        ],
    },
];

function PartyInformation() {
    return (
        <div className="party-information-container">
            <h2>Các gói tiệc</h2>
            <div className="party-list">
                {parties.map((party) => (
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
                                to={`/detail/${party.id}`}
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
