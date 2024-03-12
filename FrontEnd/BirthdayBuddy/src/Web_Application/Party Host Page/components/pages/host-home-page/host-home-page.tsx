import React from 'react'
import HostHeaderHome from '../../organisms/host-header/host-header-home'
import HostFooterHome from '../../organisms/host-footer/host-footer-home'
import HostRestaurantHome from '../../molecules/restaurant-home/restaurant-home'

function HostHomePage() {
    return (
        <>
            <header>
                <HostHeaderHome />
            </header>
            <div className="body">
                <HostRestaurantHome />
            </div>
            <footer>
                <HostFooterHome />
            </footer>
        </>
    )
}

export default HostHomePage