import React from "react";
import "./header.scss";

function GuestHeader() {
    return (
        <header className="guest-header">
            <div className="upper-header">
                <a href="#">Giao hàng</a> | {" "}
                <a href="#">Thành phố Hồ Chí Minh</a>
                <div className="tracking">
                    <a href="#">Theo dõi đơn hàng</a> | <a href="#">Trợ giúp</a>
                </div>
            </div>
            <div className="middle-header">
                <img src="/src/SWP_RESOURCE/Logo.png" alt="Logo" />
                <div className="search-bar">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <button>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="user-cart">
                    <a href="#">
                        <i className="fa fa-user"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                    </a>
                </div>
            </div>
            <nav className="lower-header">
                <ul>
                    <li>
                        <a href="#">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#">Địa điểm</a>
                    </li>
                    <li>
                        <a href="#">Chủ đề bữa tiệc</a>
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
