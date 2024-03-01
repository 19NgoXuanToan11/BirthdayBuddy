import CustomerHeaderHome from '../../organisms/customer-header-home/customer-header-home'
import BookingSuccessTemplate from '../../template/booking-success-template/booking-success-template'
import CustomerFooterHome from '../../organisms/customer-footer-home/customer-footer-home'
import { Link } from 'react-router-dom'

function BookingSuccessPage() {
    return (
        <>
            <header>
                <CustomerHeaderHome />
            </header>
            <Link to="/customer/booking-information" style={{textDecoration : 'none'}}>
                <div>
                    <BookingSuccessTemplate />
                </div>
            </Link>
            <footer>
                <CustomerFooterHome />
            </footer>
        </>
    )
}

export default BookingSuccessPage