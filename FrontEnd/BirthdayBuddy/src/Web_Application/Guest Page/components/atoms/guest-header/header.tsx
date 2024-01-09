import './header.scss'

function GuestHeader() {
  return (
    <>
      <div className="guest-header-container">
        <div className="upper-header">
          <p className='shipping'>Giao hàng</p>
          <p className='location'>Thành phố Hồ Chí Minh</p>
          <p><a href="">Theo dõi đơn hàng</a>/<a href="">Trợ giúp</a></p>
        </div>
        <div className="middle-header">
          <ul>
            <li>Trang chủ</li>
            <li>Địa điểm</li>
            <li>Sản phẩm</li>
            <li>Chủ đề bữa tiệc</li>
            <li>Về BirthdayBuddy</li>
          </ul>
        </div>
        <div className="lower-header">
          lower
        </div>
      </div>
    </>
  )
}

export default GuestHeader