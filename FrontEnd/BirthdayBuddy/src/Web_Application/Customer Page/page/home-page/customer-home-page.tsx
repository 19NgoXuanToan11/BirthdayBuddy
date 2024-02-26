import CustomerFooterHome from "../../organisms/customer-footer-home/customer-footer-home";
import CustomerHeaderHome from "../../organisms/customer-header-home/customer-header-home";
import CustomerHomeTemplate from "../../template/home-template/customer-home";

function CustomerHome() {
    return (
        <>
            <header>
              <CustomerHeaderHome />
            </header>
            <div className="body">
              <CustomerHomeTemplate />
            </div>
            <footer>
              <CustomerFooterHome />
            </footer>
        </>
    );
}

export default CustomerHome;
