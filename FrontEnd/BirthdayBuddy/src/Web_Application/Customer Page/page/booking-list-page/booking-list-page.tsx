import CustomerHeaderHome from '../../organisms/customer-header-home/customer-header-home'
import BookingListTemplate from '../../template/booking-list-template/booking-list-template'
import CustomerFooterHome from '../../organisms/customer-footer-home/customer-footer-home'

function BookingListPage() {
  return (
    <>
    <header>
        <CustomerHeaderHome />
    </header>
    <div>
        <BookingListTemplate />
    </div>
    <footer>
        <CustomerFooterHome />
    </footer>
    </>
  )
}

export default BookingListPage