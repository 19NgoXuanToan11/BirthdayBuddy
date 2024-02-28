import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerCheckoutPage() {
    return (
        <>
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
                            <a href="#">Dịch vụ đặc biệt</a>
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
            <h1>THÔNG TIN ĐẶT TIỆC</h1>
            <div className="container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Họ và tên phụ huynh"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <div className="baby-name">
                        <input
                            type="text"
                            placeholder="Họ và tên của bé"
                            className="input input-bordered w-full max-w-xs"
                        />
                        Nam{" "}
                        <input
                            type="radio"
                            name="radio-6"
                            className="radio radio-warning"
                            checked
                        />
                        Nữ{" "}
                        <input
                            type="radio"
                            name="radio-6"
                            className="radio radio-warning"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Tuổi"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <div className="input-version-2">
                        <h5>Chủ đề trang trí</h5>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Bãi biển (2.000.000)</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="input-version-2">
                        <h5>Dịch vụ đặt tiệc</h5>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Đập kẹo Pinata (200.000)</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="input-version-2">
                        <h5>Menu</h5>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Món ăn nhanh</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        placeholder="Số lượng người tham gia"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Ngày đặt tiệc"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Thời gian tổ chức"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Ghi chú"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Tổng tiền"
                        className="input input-bordered w-full max-w-xs"
                    />
                    Phương thức thanh toán
                    <div className="checkout">
                        <input
                            type="radio"
                            name="radio-2"
                            className="radio radio-primary"
                            checked
                        />
                        Thanh toán bằng tiền mặt (Cọc 50%)
                        <input
                            type="radio"
                            name="radio-2"
                            className="radio radio-primary"
                        />
                        Thanh toán online bằng momo
                        <input
                            type="radio"
                            name="radio-2"
                            className="radio radio-primary"
                            checked
                        />
                        Thanh toán online bằng VNPay
                    </div>
                </div>
            </div>
            <div className="checkout-button">
                <Link to="/scan-payment">
                    <button className="button-checkout-now">Đặt tiệc ngay</button>
                </Link>
                <button className="button-cancel">Hủy</button>
            </div>
            <div className="guest-footer-high-page">
                <ul className="call-us">
                    <li>Gọi chúng tôi</li>
                    <li>
                        <img src="/src/SWP_RESOURCE/icon/phone.gif" />
                        1900 43 22 31
                    </li>
                </ul>
                <ul className="mail-us">
                    <li>Gửi tin nhắn cho chúng tôi</li>
                    <li>
                        <img src="/src/SWP_RESOURCE/icon/message.gif" />
                        birthdaybuddy@gmail.com
                    </li>
                </ul>
                <ul className="follow-us">
                    <li>Theo dõi chúng tôi</li>
                    <div className="icon">
                        <li>
                            <img src="/src/SWP_RESOURCE/icon/facebook (1).png" />
                        </li>
                        <li>
                            <img src="/src/SWP_RESOURCE/icon/twitter.png" />
                        </li>
                        <li>
                            <img src="/src/SWP_RESOURCE/icon/instagram.png" />
                        </li>
                    </div>
                </ul>
            </div>
            <div className="guest-footer-middle-page">
                <img className="footer-logo" src="/src/SWP_RESOURCE/Logo.png" />

                <ul className="footer-nav-link">
                    <li>
                        <a href="#!">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#!">Các gói tiệc</a>
                    </li>
                    <li>
                        <a href="#!">Dịch vụ đặc biệt</a>
                    </li>
                </ul>
            </div>

            <div className="guest-footer-low-page">
                <p>
                    Lô T2, đường D1, khu Công Nghệ Cao, thành phố Thủ Đức, thành
                    phố Hồ Chí Minh
                </p>
            </div>
        </>
    )
}
