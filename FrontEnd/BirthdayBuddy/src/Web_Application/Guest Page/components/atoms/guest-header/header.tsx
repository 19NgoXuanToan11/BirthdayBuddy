import './header.scss'

function GuestHeader() {
  return (
    <>
      <div className="guest-header-container">
        <nav>
          <div className="upper-header">
            <p className='shipping'><a href="">Giao hàng</a> | <a href="">Thành phố Hồ Chí Minh</a></p>
            <p className='tracking'><a href="">Theo dõi đơn hàng</a>/<a href="">Trợ giúp</a></p>
          </div>
          <div className="middle-header">
            <img src="../../../../../SWP_RESOURCE/Logo.png" alt="center-logo.png" />
            <div className="search-bar">
              <input type="text" placeholder="Tìm kiếm..." />
              <button><i className="fas fa-search"></i></button>
            </div>
            <div className="icon-middle-header">
              
            </div>
          </div>
          <div className="lower-header">
            <ul>
              <li>Trang chủ</li>
              <li>Địa điểm</li>
              <li>Sản phẩm</li>
              <li>Chủ đề bữa tiệc</li>
              <li>Về BirthdayBuddy</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default GuestHeader