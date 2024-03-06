import "./party-list.scss";

export default function PartyList() {
    return (
        <> 
            <div className="main-content">
                <h1>DANH SÁCH BỮA TIỆC</h1>
                <div className="list-party">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Ngày đặt tiệc</th>
                                    <th>Thời gian tổ chức</th>
                                    <th>Chủ đề tiệc</th>
                                    <th>Dịch vụ đặc biệt</th>
                                    <th>Menu</th>
                                    <th>Số lượng khách</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-base-200">
                                    <th>1</th>
                                    <td>8:30 15/02/2024</td>
                                    <td>20/02/2024</td>
                                    <td>Bãi biển</td>
                                    <td>Đập kẹo Pinata</td>
                                    <td>Món ăn nhanh</td>
                                    <td>15</td>
                                    <td>Chưa diễn ra</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>8:30 15/02/2024</td>
                                    <td>20/02/2024</td>
                                    <td>Bãi biển</td>
                                    <td>Đập kẹo Pinata</td>
                                    <td>Món ăn nhanh</td>
                                    <td>15</td>
                                    <td>Chưa diễn ra</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>8:30 15/02/2024</td>
                                    <td>20/02/2024</td>
                                    <td>Bãi biển</td>
                                    <td>Đập kẹo Pinata</td>
                                    <td>Món ăn nhanh</td>
                                    <td>15</td>
                                    <td>Chưa diễn ra</td>
                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>8:30 15/02/2024</td>
                                    <td>20/02/2024</td>
                                    <td>Bãi biển</td>
                                    <td>Đập kẹo Pinata</td>
                                    <td>Món ăn nhanh</td>
                                    <td>15</td>
                                    <td>Chưa diễn ra</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
