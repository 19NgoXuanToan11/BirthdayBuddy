import "./scan-payment.scss"
import { Link } from 'react-router-dom'

export default function ScanPayment() {
    return (
    <>
            <div className='title'>THANH TOÁN</div>
            <Link to="/customer/booking-information">
            <img className='scan-payment' src='/src/SWP_RESOURCE/pictures/momo-bank.jpg'></img>
            </Link>
    </>
    )
}
