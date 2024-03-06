import HostHeaderHome from '../../organisms/host-header/host-header-home'
import CreatePartyThemeTemplate from '../../templates/create-party-theme-template/create-party-theme-template'
import HostFooterHome from '../../organisms/host-footer/host-footer-home'

function HostCreatePartyThemePage() {
  return (
    <>
    <header>
        <HostHeaderHome />
    </header>
    <div className="body">
        <CreatePartyThemeTemplate />
    </div>
    <footer>
        <HostFooterHome />
    </footer>
    </>
  )
}

export default HostCreatePartyThemePage