import CustomerFooterHome from "../../organisms/customer-footer-home/customer-footer-home"
import CustomerHeaderHome from "../../organisms/customer-header-home/customer-header-home"
import BookingInformation from "../../template/booking-information-template/booking-information"

function BookingInformationPage() {
  return (
    <>
    <header>
        <CustomerHeaderHome />
    </header>
    <div className="body">
        <BookingInformation />
    </div>
    <footer>
        <CustomerFooterHome />
    </footer>
    </>
  )
}

export default BookingInformationPage