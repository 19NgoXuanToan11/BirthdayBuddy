import React from 'react'
import HostHeaderHome from '../../organisms/host-header/host-header-home'
import HostFooterHome from '../../organisms/host-footer/host-footer-home'
import HostPartyListTemplate from '../../templates/party-list-template/host-party-list'

function HostPartyListPage() {
  return (
    <>
    <header>
        <HostHeaderHome />
    </header>
    <div className="body">
        <HostPartyListTemplate />
    </div>
    <footer>
        <HostFooterHome />
    </footer>
    </>
  )
}

export default HostPartyListPage