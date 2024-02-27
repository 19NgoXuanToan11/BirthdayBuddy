import "./header.scss";
import { Link } from "react-router-dom";

function GuestHeader() {
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
                    <a href="LoginPage">
                        <i className="fa fa-user">
                            <img src="/src/SWP_RESOURCE/icon/alone.gif" />
                        </i>
                    </a>
                    <a href="#">
                        <i className="fa fa-shopping-cart">
                            <img src="/src/SWP_RESOURCE/icon/shopping-cart.gif" />
                        </i>
                    </a>
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
                        <a href="#">Đặt tiệc sinh nhật</a>
                    </li>
                    <li>
                        <a href="#">Về BirthdayBuddy</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default GuestHeader;
