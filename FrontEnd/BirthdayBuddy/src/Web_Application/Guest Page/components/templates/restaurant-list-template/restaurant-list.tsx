import RestaurantList from '../../molecules/restaurants-list/restaurant-list'
import SearchFilter from '../../molecules/search-filter/search-filter'
import './restaurant-list.scss'
function RestaurantListTemplate() {
  return (
    <>
      <h1>DANH SÁCH NHÀ HÀNG</h1>
      <div className="restaurant-search-container">
        <div className="search-filter">
          <SearchFilter />
        </div>
        <div className="resstaurant">
          <RestaurantList />
        </div>
      </div>
    </>
  )
}

export default RestaurantListTemplate