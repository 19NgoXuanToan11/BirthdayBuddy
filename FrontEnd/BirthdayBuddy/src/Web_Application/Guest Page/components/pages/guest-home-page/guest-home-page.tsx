import GuestHeaderHome from '../../organisms/guest-header-home/guest-header-home'
import GuestFooterHome from '../../organisms/guest-footer-home/guest-footer-home'
import GuestHomeTemplate from '../../templates/guest-home-template/guest-home'

function GuestHomePage() {
  return (
    <>
    <div>
        <header>
            <GuestHeaderHome />
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