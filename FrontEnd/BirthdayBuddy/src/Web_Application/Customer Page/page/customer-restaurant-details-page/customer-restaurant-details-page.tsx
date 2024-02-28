import PartyDetail from '../../molecules/party-detail/party-detail'
import CustomerFooterHome from '../../organisms/customer-footer-home/customer-footer-home'
import CustomerHeaderHome from '../../organisms/customer-header-home/customer-header-home'

function CustomerRestaurantDetailsPage() {
    return (
        <>
        <header>
            <CustomerHeaderHome />
        </header>
        <div>
            <PartyDetail />
        </div>
        <footer>
            <CustomerFooterHome />
        </footer>
        </>
    )
}

export default CustomerRestaurantDetailsPage