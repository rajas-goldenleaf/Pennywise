import Link from "next/link";
import React from "react";

export default function CanvasHeader() {
    return (
        <React.Fragment>
            <div className="offcanvas__header">
                <div className="offcanvas__inner">
                    <div className="offcanvas__logo">
                        <Link
                            className="offcanvas__logo_link"
                            href="/"
                        >
                            <img
                                src="assets/img/logo/nav-logo-pennywise-custome.png"
                                alt="Grocee Logo"
                                width={158}
                                height={36}
                            />
                        </Link>
                        <button
                            className="offcanvas__close--btn"
                            data-offcanvas=""
                        >
                            close
                        </button>
                    </div>
                    <nav className="offcanvas__menu">
                        <ul className="offcanvas__menu_ul">
                            <li className="offcanvas__menu_li">
                                <Link
                                    className="offcanvas__menu_item"
                                    href="index.html"
                                >
                                    Home
                                </Link>
                                {/* <ul className="offcanvas__sub_menu">
                                    <li className="offcanvas__sub_menu_li">
                                        <Link
                                            href="index.html"
                                            className="offcanvas__sub_menu_item"
                                        >
                                            Home One
                                        </Link>
                                    </li>
                                    <li className="offcanvas__sub_menu_li">
                                        <Link
                                            href="index-2.html"
                                            className="offcanvas__sub_menu_item"
                                        >
                                            Home Two
                                        </Link>
                                    </li>
                                    <li className="offcanvas__sub_menu_li">
                                        <Link
                                            href="index-3.html"
                                            className="offcanvas__sub_menu_item"
                                        >
                                            Home Three
                                        </Link>
                                    </li>
                                    <li className="offcanvas__sub_menu_li">
                                        <Link
                                            href="index-4.html"
                                            className="offcanvas__sub_menu_item"
                                        >
                                            Home Four
                                        </Link>
                                    </li>
                                </ul> */}
                            </li>
                            <li className="offcanvas__menu_li">
                                <Link
                                    className="offcanvas__menu_item"
                                    href="/shop"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li className="offcanvas__menu_li">
                                <Link
                                    className="offcanvas__menu_item"
                                    href="/blog"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="offcanvas__menu_li">
                                <Link
                                    className="offcanvas__menu_item"
                                    href="/about-us"
                                >
                                    About us
                                </Link>
                            </li>
                            <li className="offcanvas__menu_li">
                                <Link
                                    className="offcanvas__menu_item"
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="offcanvas__account--items">
                            <Link
                                className="offcanvas__account--items__btn d-flex align-items-center"
                                href="/login"
                            >
                                <span className="offcanvas__account--items__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20.51"
                                        height="19.443"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={32}
                                        />
                                        <path
                                            d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit={
                                                10
                                            }
                                            strokeWidth={32}
                                        />
                                    </svg>
                                </span>
                                <span className="offcanvas__account--items__label">
                                    Login / Register
                                </span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            {/* End Offcanvas header menu */}
        </React.Fragment>
    );
}