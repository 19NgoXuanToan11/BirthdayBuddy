import CustomerHeaderHome from '../../organisms/customer-header-home/customer-header-home'
import BookingNotDoneTemplate from '../../template/booking-notdone-template/booking-notdone-template'
import CustomerFooterHome from '../../organisms/customer-footer-home/customer-footer-home'

function BookingNotDonePage() {
  return (
    <>
    <header>
        <CustomerHeaderHome />
    </header>
    <div>
        <BookingNotDoneTemplate />
    </div>
    <footer>
        <CustomerFooterHome />
    </footer>
    </>
  )
}

export default BookingNotDonePage