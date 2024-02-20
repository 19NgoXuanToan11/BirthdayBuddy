import React from "react";
import { listParties } from "../data/ListOfParties.js";
import { useParams } from "react-router-dom";
import "./party-detail.scss";

type Party = {
    id: number;
    name: string;
    imgUrl: string;
    description: string[];
};

export default function PartyDetail() {
    const { id } = useParams();
    const thisParty = listParties.find(
        (party: Party) => String(party.id) === id
    );

    return (
        <>
            <div className="container">
                <h1 className="restaurant-title">THÔNG TIN NHÀ HÀNG</h1>
                <div className="restaurant-detail">
                    <img
                        className="restaurant-image"
                        src={thisParty.imgUrl}
                        alt={thisParty.name}
                    />
                    <div className="information-container">
                        <h2 className="restaurant-name">
                            {thisParty.detailName}
                        </h2>
                        <ul className="restaurant-description">
                            {thisParty.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="reviews-container">
                    <h2>ĐÁNH GIÁ</h2>
                    <div className="review-container">
                        <div className="review">
                            <h5 className="reviewer-name">Nguyễn Văn A</h5>
                            <h5 className="reviewer-rating">@</h5>
                            <h5 className="review-text">
                                Con tôi đã rất vui, nhà hàng chu đáo, tận tình
                                hỗ trợ
                            </h5>
                        </div>
                        <div className="review">
                            <h5 className="reviewer-name">Nguyễn Văn B</h5>
                            <h5 className="reviewer-rating">@</h5>
                            <h5 className="review-text">
                                Con tôi đã rất vui, nhà hàng chu đáo, tận tình
                                hỗ trợ
                            </h5>
                        </div>
                        <div className="review">
                            <h5 className="reviewer-name">Nguyễn Văn C</h5>
                            <h5 className="reviewer-rating">@</h5>
                            <h5 className="review-text">
                                Con tôi đã rất vui, nhà hàng chu đáo, tận tình
                                hỗ trợ
                            </h5>
                        </div>
                        <div className="review">
                            <h5 className="reviewer-name">Nguyễn Văn D</h5>
                            <h5 className="reviewer-rating">@</h5>
                            <h5 className="review-text">
                                Con tôi đã rất vui, nhà hàng chu đáo, tận tình
                                hỗ trợ
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="booking-container">
                    <h2>GÓI TIỆC</h2>
                    <div className="booking-header">
                        <ul className="booking-categories">
                            <li>Gói tiệc</li>
                            <li>Thông tin chi tiết</li>
                            <li>Giá tiền</li>
                        </ul>
                    </div>
                    <div className="booking-option">
                        <ul className="booking-details">
                            <li>Chủ đề bữa tiệc</li>
                            <li>
                                <select className="select w-full max-w-xs">
                                    <option>Bãi biển</option>
                                    <option>Marge</option>
                                    <option>Bart</option>
                                    <option>Lisa</option>
                                    <option>Maggie</option>
                                </select>
                            </li>
                            <li>2.000.000</li>
                        </ul>
                    </div>
                    <div className="booking-option">
                        <ul className="booking-details">
                            <li>Dịch vụ đặc biệt</li>
                            <li>
                                <li>
                                    <select className="select w-full max-w-xs">
                                        <option>Đập kẹo Pinata</option>
                                        <option>Marge</option>
                                        <option>Bart</option>
                                        <option>Lisa</option>
                                        <option>Maggie</option>
                                    </select>
                                </li>
                            </li>
                            <li>2.000.000</li>
                        </ul>
                    </div>
                    <div className="booking-option">
                        <ul className="booking-details">
                            <li>Menu</li>
                            <li>
                                <li>
                                    <select className="select w-full max-w-xs">
                                        <option>Món ăn nhanh</option>
                                        <option>Marge</option>
                                        <option>Bart</option>
                                        <option>Lisa</option>
                                        <option>Maggie</option>
                                    </select>
                                </li>
                            </li>
                            <li>2.000.000</li>
                        </ul>
                    </div>
                    <div className="booking-option">
                        <ul className="booking-details">
                            <li>Số lượng người tham gia</li>
                            <li>--</li>
                            <li>200.000/bé</li>
                        </ul>
                    </div>

                    <div className="booking-actions">
                        <button className="button-book-now">
                            Đặt tiệc ngay
                        </button>
                        <button className="button-view-more">
                            Xem nhà hàng khác
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
