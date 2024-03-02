import React from "react";
import CustomerHeaderHome from "../../organisms/customer-header-home/customer-header-home";
import CustomerFooterHome from "../../organisms/customer-footer-home/customer-footer-home";
import "./party-notification.scss"

export default function PartyNotification() {
    return (
        <>
            <CustomerHeaderHome />
            <h2>THÔNG BÁO</h2>
            <div className="container">
                <div className="notification">
                    <button className="all">Tất cả</button>
                    <button className="not-yet">Chưa đọc</button>
                </div>
                <div className="notification-content">
                    <p>
                        Bữa tiệc của bạn tại nhà hàng Hello đã được duyệt. Nhấn
                        vào đây để xem chi tiết
                    </p>
                    <p>
                        Bữa tiệc của bạn tại nhà hàng Hello đang được xử lí 6
                        giờ trước
                    </p>
                    <p>Bạn vừa đánh giá nhà hàng Hello 5 sao</p>
                    <p>02/03/2024</p>
                </div>
            </div>
            <CustomerFooterHome />
        </>
    );
}
