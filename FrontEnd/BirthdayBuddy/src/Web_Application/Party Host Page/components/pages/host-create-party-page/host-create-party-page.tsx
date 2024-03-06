import React from 'react'
import CreatePartyTemplate from '../../templates/create-party-template/create-party-template'
import HostHeaderHome from '../../organisms/host-header/host-header-home'
import HostFooterHome from '../../organisms/host-footer/host-footer-home'

function HostCreatePartyPage() {
    return (
        <>
            <header>
                <HostHeaderHome />
            </header>
            <div className='body'>
                <CreatePartyTemplate />
            </div>
            <footer>
                <HostFooterHome />
            </footer>
        </>

    )
}

export default HostCreatePartyPage