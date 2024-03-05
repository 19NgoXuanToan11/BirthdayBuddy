import React from "react";
import { Link } from "react-router-dom";

export default function CreateFoodMenu() {
    return (
        <>
            <div className="food-content">
                <h1>TẠO MENU MÓN ĂN</h1>
                <div className="menu">
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
            <div className="food-buttons">
                <Link to="/host/restaurant-booking-tracking">
                    <button className="btn btn-outline btn-warning">Tạo</button>
                </Link>
                <button className="btn btn-outline btn-warning">Hủy</button>
            </div>
        </>
    );
}
