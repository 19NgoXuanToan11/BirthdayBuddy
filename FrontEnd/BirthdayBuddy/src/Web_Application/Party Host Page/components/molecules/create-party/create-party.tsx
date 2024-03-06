import React from "react";
import { Link } from "react-router-dom";
import "./create-party.scss";

export default function CreateParty() {
    return (
        <>
            <div className="main-content">
                <p>TẠO BỮA TIỆC</p>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Thêm chủ đề bữa tiệc"
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Thêm dịch vụ đặc biệt"
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Thêm menu món ăn"
                        className="input"
                    />
                </div>
            </div>
            <div className="form-buttons">
                <Link to="/host/create-party/create-party-theme">
                    <button className="create-button">Tạo</button>
                </Link>
                <button className="cancel-button">Hủy</button>
            </div>
        </>
    );
}
