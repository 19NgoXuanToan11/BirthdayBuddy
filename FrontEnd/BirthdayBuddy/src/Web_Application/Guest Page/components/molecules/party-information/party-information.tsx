import './party-information.scss'

function PartyInformation() {
  return (
    <div className='party-information-container'>
        <h2>Các gói tiệc</h2>
      <div className="party-list">
        <div className="party-section-1">
          <img src="../../../../../../src/SWP_RESOURCE/pictures/birthday-restaurant-inside.jpg" alt="inside-restaurant.jpg" />
          <div className="upper-box">
            Tiệc sinh nhật trong nhà
          </div>
          <div className="party-contents">
            <li>Phòng tiệc có sức chứa từ 20 - 50 người</li>
            <li>Chủ đề trang trí đa dạng</li>
            <li>Dịch vụ đặc biệt</li>
            <li>Giá cả hợp lí, phù hợp</li>
            <li>Cam kết mang lại bữa tiệc đáng nhớ cho bé</li>
          </div>
          <div className="under-box">
            <a href="" type='submit'>Xem thêm</a>
          </div>
        </div>
        <div className="party-section-2">
          <img src="../../../../../../src/SWP_RESOURCE/pictures/pool-party.jpg" alt="outside-restaurant.jpg" />
          <div className="upper-box">
            Tiệc sinh nhật ngoài trời
          </div>
          <div className="party-contents">
            <li>Khu vực tiệc thoáng đãng, mát mẻ</li>
            <li>Chủ đề trang trí đa dạng</li>
            <li>Dịch vụ đặc biệt</li>
            <li>Giá cả hợp lí, phù hợp</li>
            <li>Cam kết mang lại bữa tiệc đáng nhớ cho bé</li>
          </div>
          <div className="under-box">
            <a href="" type='submit'>Xem thêm</a>
          </div>
        </div>
        <div className="party-section-3">
          <img src="../../../../../../src/SWP_RESOURCE/pictures/home-birthday.jpg" alt="home-birthday.jpg" />
          <div className="upper-box">
            Tiệc sinh nhật tại gia
          </div>
          <div className="party-contents">
            <li>Giờ giấc linh động</li>
            <li>Chủ đề trang trí đa dạng</li>
            <li>Dịch vụ đặc biệt</li>
            <li>Giá cả hợp lí, phù hợp</li>
            <li>Cam kết mang lại bữa tiệc đáng nhớ cho bé</li>
          </div>
          <div className="under-box">
            <a href="" type='submit'>Xem thêm</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartyInformation