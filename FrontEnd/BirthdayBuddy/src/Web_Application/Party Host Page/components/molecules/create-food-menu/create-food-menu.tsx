import { Link } from "react-router-dom";

export default function CreateFoodMenu() {
    return (
        <>
            <div className="main">
                <h1>TẠO MENU MÓN ĂN</h1>
                <div className="content-theme">
                    <input type="text" placeholder="ID" className="input" />
                    <input
                        type="text"
                        placeholder="Tên menu"
                        className="input"
                    />
                    <input type="text" placeholder="Món ăn" className="input" />
                    <input type="text" placeholder="Mô tả" className="input" />
                    <input
                        type="text"
                        placeholder="Ghi chú"
                        className="input"
                    />
                </div>
                <div className="theme-buttons">
                    <Link to="/host/restaurant-booking-tracking">
                        <button className="create-button">Tạo</button>
                    </Link>
                    <Link to="/host/create-party/create-party-theme/create-special-service">
                        <button className="cancel-button">Hủy</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
