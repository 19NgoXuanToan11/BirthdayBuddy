import "./header.scss";
import { Link } from "react-router-dom";

function CustomerHeader() {
    return (
        <header className="guest-header">
            <div className="middle-header">
                <div className="logo">
                    <Link to="/">
                        <img src="/src/SWP_RESOURCE/Logo.png" alt="Logo" />
                    </Link>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <div className="user-cart">
                    <a href="">
                        <i className="fa fa-user">
                            <img src="/src/SWP_RESOURCE/icon/alone.gif" />
                        </i>
                    </a>
                    <Link to="/customer/notification">
                        <i className="fa fa-shopping-cart">
                            <img src="/src/SWP_RESOURCE/icon/notification-bell.gif" />
                        </i>
                    </Link>
                </div>
            </div>
            <nav className="lower-header">
                <ul>
                    <li>
                        <Link to="/">
                            <span>Trang chủ</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#">Các gói tiệc</a>
                    </li>
                    <li>
                        <a href="#">Giỏ hàng</a>
                    </li>
                    <li>
                        <a href="#">Về BirthdayBuddy</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default CustomerHeader;
