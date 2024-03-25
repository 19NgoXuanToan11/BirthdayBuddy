import CustomerHeaderHome from '../../organisms/customer-header-home/customer-header-home'
import CustomerFooterHome from '../../organisms/customer-footer-home/customer-footer-home'
import PartyCheckout from '../../molecules/party-checkout/party-checkout'

function CustomerCheckoutPage() {
    return (
        <>
            <header>
                <CustomerHeaderHome />
            </header>
            <div className="body-container">
                {/* <PartyCheckout /> */}
            </div>
            <footer>
                <CustomerFooterHome />
            </footer>
        </>
    )
}

export default CustomerCheckoutPage