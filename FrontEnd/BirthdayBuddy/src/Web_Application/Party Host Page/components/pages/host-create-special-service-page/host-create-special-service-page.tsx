import React from 'react'
import HostHeader from '../../atoms/host-header/host-header'
import HostHeaderHome from '../../organisms/host-header/host-header-home'
import CreateSpecialServiceTemplate from '../../templates/create-special-service-template/create-special-service'
import HostFooterHome from '../../organisms/host-footer/host-footer-home'

function HostCreateSpecialServicePage() {
    return (
        <>
            <header>
                <HostHeaderHome />
            </header>
            <div className="body">
                <CreateSpecialServiceTemplate />
            </div>
            <footer>
                <HostFooterHome />
            </footer>
        </>)
}

export default HostCreateSpecialServicePage