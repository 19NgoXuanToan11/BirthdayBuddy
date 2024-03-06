import React from "react";
import { Link } from "react-router-dom";

export default function CreateSpecialService() {
    return (
        <>
            <div className="main">
                <h1>TẠO DỊCH VỤ BỮA TIỆC</h1>
                <div className="content-theme">
                    <input type="text" placeholder="ID" className="input" />
                    <input
                        type="text"
                        placeholder="Tên dịch vụ"
                        className="input"
                    />
                    <input type="text" placeholder="Mô tả" className="input" />
                    <input
                        type="text"
                        placeholder="Giá tiền"
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Người tạo"
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Ghi chú"
                        className="input"
                    />
                </div>
                <div className="theme-buttons">
                    <Link to="/host/create-party/create-party-theme/create-special-service/create-food-menu">
                        <button className="create-button">Tạo</button>
                    </Link>
                    <Link to="/host/create-party/create-party-theme">
                        <button className="cancel-button">Hủy</button>
                    </Link>
                </div>
            </div>
     </>
    );
}
