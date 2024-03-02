import "./guest-restaurant-list-header.scss";
import { Link as Forward } from "react-router-dom";

function GuestRestaurantListHeader() {
    return (
        <header className="guest-header">
            <div className="middle-header">
                <div className="logo">
                    <Forward to="/">
                        <img src="/src/SWP_RESOURCE/Logo.png" alt="Logo" />
                    </Forward>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <div className="user-cart">
                    <Forward to="/login">
                        <i className="fa fa-user">
                            <img src="/src/SWP_RESOURCE/icon/alone.gif" />
                        </i>
                    </Forward>
                    <a href="#">
                        <i className="fa fa-shopping-cart">
                            <img src="/src/SWP_RESOURCE/icon/shopping-cart.gif" />
                        </i>
                    </a>
                </div>
            </div>
            <nav className="lower-header">
                <ul>
                    <Forward to="/">
                        <li>
                            <a href="">Trang chủ</a>
                        </li>
                    </Forward>
                    <Forward to="/">
                        <li>
                            <a href="">Các gói tiệc</a>
                        </li>
                    </Forward>
                    <Forward to="/login">
                        <li>
                            <a href="">Đặt tiệc sinh nhật</a>
                        </li>
                    </Forward>
                    <li>
                        <a href="#">Về BirthdayBuddy</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default GuestRestaurantListHeader;
