import CustomerHeaderHome from '../../organisms/customer-header-home/customer-header-home'
import MomoPaymentTemplate from '../../template/scan-payment-template/momo-payment-template'
import CustomerFooterHome from '../../organisms/customer-footer-home/customer-footer-home'

function MomoPaymentPage() {
  return (
    <>
    <header>
        <CustomerHeaderHome />
    </header>
    <div className="body">
        <MomoPaymentTemplate />
    </div>
    <footer>
        <CustomerFooterHome />
    </footer>
    </>
  )
}

export default MomoPaymentPage