import React from "react";
import { Link } from "react-router-dom";

export default function CreateSpecialService() {
    return (
        <>
            <div className="container">
                <h1>TẠO DỊCH VỤ ĐẶC BIỆT</h1>
                <div className="special-content">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />

                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                </div>
            </div>
            <div className="special-buttons">
                <Link to="/host/create-party/create-party-theme/create-special-service/create-food-menu">
                    <button className="btn btn-outline btn-warning">Tạo</button>
                </Link>
                <button className="btn btn-outline btn-warning">Hủy</button>
            </div>
        </>
    );
}
