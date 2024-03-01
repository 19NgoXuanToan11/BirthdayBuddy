import CustomerHeaderHome from '../../organisms/customer-header-home/customer-header-home'
import MomoPaymentTemplate from '../../template/scan-payment-template/momo-payment-template'
import CustomerFooterHome from '../../organisms/customer-footer-home/customer-footer-home'
import { Link } from 'react-router-dom'

function MomoPaymentPage() {
  return (
    <>
      <header>
        <CustomerHeaderHome />
      </header>
      <Link to="/customer/booking-success">
        <div className="body">
          <MomoPaymentTemplate />
        </div>
      </Link>
      <footer>
        <CustomerFooterHome />
      </footer>
    </>
  )
}

export default MomoPaymentPage