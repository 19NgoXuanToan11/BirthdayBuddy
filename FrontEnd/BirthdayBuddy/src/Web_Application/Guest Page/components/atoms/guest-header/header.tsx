import "./header.scss";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

function GuestHeader() {
    return (
        <header className="guest-header">
            <div className="middle-header">
                <div className="logo">
                    <Scroll to="/">
                        <img src="/src/SWP_RESOURCE/Logo.png" alt="Logo" />
                    </Scroll>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <div className="user-cart">
                    <Link to="login">
                        <i className="fa fa-user">
                            <img src="/src/SWP_RESOURCE/icon/alone.gif" />
                        </i>
                    </Link>
                    <a href="#">
                        <i className="fa fa-shopping-cart">
                            <img src="/src/SWP_RESOURCE/icon/notification-bell.gif" />
                        </i>
                    </a>
                </div>
            </div>
            <nav className="lower-header">
                <ul>
                    <Scroll to="carousel-container">
                        <li>
                            <a href="">Trang chủ</a>
                        </li>
                    </Scroll>
                    <Scroll to="party-information-container">
                        <li>
                            <a href="">Các gói tiệc</a>
                        </li>
                    </Scroll>
                    <Link to="login">
                        <li>
                            <a href="">Đặt tiệc sinh nhật</a>
                        </li>
                    </Link>
                    <li>
                        <a href="#">Về BirthdayBuddy</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default GuestHeader;
