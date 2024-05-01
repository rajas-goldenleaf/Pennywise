import React from "react";

export default function NotificationTopBar() {
    return (
        <div className="header__topbar bg__primary">
            <div className="container">
                <div className="header__topbar--inner d-flex align-items-center justify-content-center">
                    <div className="header__shipping">
                        <p className="header__shipping--text text-white">
                            <img
                                className="header__shipping--icon"
                                src="assets/img/icon/car.png"
                                alt="header-shipping-img"
                            />{' '}
                            Claim your online FREE Delivery
                            or Shipping today! Expires in
                        </p>
                    </div>
                    <div
                        className="header__topbar--countdown d-flex"
                        data-countdown="Sep 30, 2022 00:00:00"
                    />
                </div>
            </div>
        </div>
    );
}