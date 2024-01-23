import GuestFooterHome from '../../organisms/guest-footer-home/guest-footer-home'
import GuestHomeTemplate from '../../templates/guest-home-template/guest-home'
import GuestHeader from '../../atoms/guest-header/header'

function GuestHomePage() {
  return (
    <>
    <div>
        <header>
            <GuestHeader />
        </header>
        <div className='guest-body-container'>
            <GuestHomeTemplate />
        </div>
        <footer>
            <GuestFooterHome />
        </footer>
    </div>
    </>
  )
}

export default GuestHomePage