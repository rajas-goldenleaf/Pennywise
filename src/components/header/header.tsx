import React from 'react';
import { CanvasHeader, CartSideBarPreview, DesktopNavBar, MobileNavBar, NavBar, NotificationTopBar, SearchBoxArea } from './elements';


export default function Header() {
    return (
        <React.Fragment>
            {/* Start header area */}
            <header className="header__section header__transparent">
                <NotificationTopBar />
                <NavBar />
                <DesktopNavBar />
                <CanvasHeader />
                <MobileNavBar />
                <CartSideBarPreview />
                <SearchBoxArea />
            </header>
        </React.Fragment>
    );
}




