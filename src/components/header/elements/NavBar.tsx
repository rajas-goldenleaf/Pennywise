import useSearch from "@/hooks/useSearch";
import Link from "next/link";
import React from "react";

export default function NavBar() {
    const { changeSearchText, submitHandler, searchResults } = useSearch();
    console.log(searchResults)
    return (
        <div className="main__header header__sticky">
            <div className="container">
                <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
                    {/* BURGER */}
                    <div className="offcanvas__header--menu__open ">
                        <span
                            className="offcanvas__header--menu__open--btn"
                            data-offcanvas=""
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ionicon offcanvas__header--menu__open--svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={32}
                                    d="M80 160h352M80 256h352M80 352h352"
                                />
                            </svg>
                            <span className="visually-hidden">
                                Offcanvas Menu Open
                            </span>
                        </span>
                    </div>
                    {/* LOGO */}
                    <div className="main__logo">
                        <h1 className="main__logo--title">
                            <a
                                className="main__logo--link"
                                href="index.html"
                            >
                                <img
                                    className="main__logo--img"
                                    // src="assets/img/logo/nav-log.png"
                                    src="assets/img/logo/nav-logo-pennywise-custome.png"
                                    alt="logo-img"
                                />
                            </a>
                        </h1>
                    </div>

                    {/* PRODUCT SEARCH - visible only on desktop */}
                    <div className="header__search--widget d-none d-lg-block header__sticky--none">
                        <form
                            className="d-flex header__search--form"
                            // action="/"
                            onSubmit={submitHandler}
                        >
                            <div className="header__select--categories select">
                                <select className="header__select--inner">
                                    <option
                                        defaultValue=""
                                        value={1}
                                    >
                                        Select Categories
                                    </option>
                                    <option value={2}>
                                        Accessories
                                    </option>
                                    <option value={3}>
                                        Accessories &amp;
                                        More
                                    </option>
                                    <option value={4}>
                                        Camera &amp; Video{' '}
                                    </option>
                                    <option value={5}>
                                        Butters &amp; Eggs{' '}
                                    </option>
                                </select>
                            </div>
                            <div className="header__search--box">
                                <label>
                                    <input
                                        className="header__search--input"
                                        placeholder="Search Product"
                                        onChange={changeSearchText}
                                        type="text"
                                    />
                                </label>
                                <button
                                    className="header__search--button bg__secondary text-white"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* DESKTOP NAVBAR */}
                    <div className="header__menu d-none d-lg-block header__sticky--block">
                        <nav className="header__menu--navigation">
                            <ul className="d-flex">
                                <li className="header__menu--items">
                                    <Link
                                        className="header__menu--link"
                                        href="/"
                                    >
                                        Home
                                        {/* <svg
                                            className="menu__arrowdown--icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height="7.41"
                                            viewBox="0 0 12 7.41"
                                        >
                                            <path
                                                d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                                opacity="0.7"
                                            />
                                        </svg> */}
                                    </Link>
                                    {/* <ul className="header__sub--menu">
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="index.html"
                                                className="header__sub--menu__link"
                                            >
                                                Home One
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="index-2.html"
                                                className="header__sub--menu__link"
                                            >
                                                Home Two
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="index-3.html"
                                                className="header__sub--menu__link"
                                            >
                                                Home Three
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="index-4.html"
                                                className="header__sub--menu__link"
                                            >
                                                Home Four
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="header__menu--items mega__menu--items">
                                    <Link
                                        className="header__menu--link"
                                        href="/shop"
                                    >
                                        Shop
                                        {/* <svg
                                            className="menu__arrowdown--icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height="7.41"
                                            viewBox="0 0 12 7.41"
                                        >
                                            <path
                                                d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                                opacity="0.7"
                                            />
                                        </svg> */}
                                    </Link>
                                    {/* <ul className="header__mega--menu d-flex">
                                        <li className="header__mega--menu__li">
                                            <span className="header__mega--subtitle">
                                                Column One
                                            </span>
                                            <ul className="header__mega--sub__menu">
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="shop.html"
                                                    >
                                                        Shop
                                                        Left
                                                        Sidebar
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="shop-right-sidebar.html"
                                                    >
                                                        Shop
                                                        Right
                                                        Sidebar
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="shop-grid.html"
                                                    >
                                                        Shop
                                                        Grid
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="shop-grid-list.html"
                                                    >
                                                        Shop
                                                        Grid
                                                        List
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="shop-list.html"
                                                    >
                                                        Shop
                                                        List
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="header__mega--menu__li">
                                            <span className="header__mega--subtitle">
                                                Column Two
                                            </span>
                                            <ul className="header__mega--sub__menu">
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="product-details.html"
                                                    >
                                                        Product
                                                        Details
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="product-video.html"
                                                    >
                                                        Video
                                                        Product
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="product-details.html"
                                                    >
                                                        Variable
                                                        Product
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="product-left-sidebar.html"
                                                    >
                                                        Product
                                                        Left
                                                        Sidebar
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="product-gallery.html"
                                                    >
                                                        Product
                                                        Gallery
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="header__mega--menu__li">
                                            <span className="header__mega--subtitle">
                                                Column Three
                                            </span>
                                            <ul className="header__mega--sub__menu">
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="my-account.html"
                                                    >
                                                        My
                                                        Account
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="my-account-2.html"
                                                    >
                                                        My
                                                        Account
                                                        2
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="404.html"
                                                    >
                                                        404
                                                        Page
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="login.html"
                                                    >
                                                        Login
                                                        Page
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="faq.html"
                                                    >
                                                        Faq
                                                        Page
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="header__mega--menu__li">
                                            <span className="header__mega--subtitle">
                                                Column Four
                                            </span>
                                            <ul className="header__mega--sub__menu">
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="compare.html"
                                                    >
                                                        Compare
                                                        Pages
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="checkout.html"
                                                    >
                                                        Checkout
                                                        page
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="checkout-2.html"
                                                    >
                                                        Checkout
                                                        Style
                                                        2
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="checkout-3.html"
                                                    >
                                                        Checkout
                                                        Style
                                                        3
                                                    </a>
                                                </li>
                                                <li className="header__mega--sub__menu_li">
                                                    <a
                                                        className="header__mega--sub__menu--title"
                                                        href="checkout-4.html"
                                                    >
                                                        Checkout
                                                        Style
                                                        4
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="header__menu--items">
                                    <Link
                                        className="header__menu--link"
                                        href="/blog"
                                    >
                                        Blog
                                        {/* <svg
                                            className="menu__arrowdown--icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height="7.41"
                                            viewBox="0 0 12 7.41"
                                        >
                                            <path
                                                d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                                opacity="0.7"
                                            />
                                        </svg> */}
                                    </Link>
                                    {/* <ul className="header__sub--menu">
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="blog.html"
                                                className="header__sub--menu__link"
                                            >
                                                Blog Grid
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="blog-details.html"
                                                className="header__sub--menu__link"
                                            >
                                                Blog Details
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="blog-left-sidebar.html"
                                                className="header__sub--menu__link"
                                            >
                                                Blog Left
                                                Sidebar
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="blog-right-sidebar.html"
                                                className="header__sub--menu__link"
                                            >
                                                Blog Right
                                                Sidebar
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="header__menu--items">
                                    <Link
                                        className="header__menu--link"
                                        href="/about-us"
                                    >
                                        About us
                                        {/* <svg
                                            className="menu__arrowdown--icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height="7.41"
                                            viewBox="0 0 12 7.41"
                                        >
                                            <path
                                                d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                                opacity="0.7"
                                            />
                                        </svg> */}
                                    </Link>
                                    {/* <ul className="header__sub--menu">
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="about.html"
                                                className="header__sub--menu__link"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="contact.html"
                                                className="header__sub--menu__link"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="cart.html"
                                                className="header__sub--menu__link"
                                            >
                                                Cart Page
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="portfolio.html"
                                                className="header__sub--menu__link"
                                            >
                                                Portfolio
                                                Page
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="wishlist.html"
                                                className="header__sub--menu__link"
                                            >
                                                Wishlist
                                                Page
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="login.html"
                                                className="header__sub--menu__link"
                                            >
                                                Login Page
                                            </a>
                                        </li>
                                        <li className="header__sub--menu__items">
                                            <a
                                                href="404.html"
                                                className="header__sub--menu__link"
                                            >
                                                Error Page
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>
                                <li className="header__menu--items">
                                    <a
                                        className="header__menu--link"
                                        href="/contact"
                                    >
                                        Contact{' '}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* CART OPTIONS */}
                    {/* NAV BAR SHOWN AT STARTING */}
                    <div className="header__account header__sticky--none">
                        <ul className="d-flex">
                            <li className="header__account--items d-none d-lg-block">
                                <Link
                                    className="header__account--btn"
                                    href="/my-account"
                                >
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
                                    <span className="visually-hidden">
                                        My account
                                    </span>
                                </Link>
                            </li>
                            <li className="header__account--items  header__account--search__items mobile__d--block d-sm-2-none">
                                <span
                                    className="header__account--btn search__open--btn"
                                    data-offcanvas=""
                                >
                                    <svg
                                        className="product__items--action__btn--svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22.51"
                                        height="20.443"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit={
                                                10
                                            }
                                            strokeWidth={32}
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeMiterlimit={
                                                10
                                            }
                                            strokeWidth={32}
                                            d="M338.29 338.29L448 448"
                                        />
                                    </svg>
                                    <span className="visually-hidden">
                                        Search
                                    </span>
                                </span>
                            </li>
                            <li className="header__account--items">
                                <span
                                    className="header__account--btn minicart__open--btn"
                                    data-offcanvas=""
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16.706"
                                        height="15.534"
                                        viewBox="0 0 14.706 13.534"
                                    >
                                        <g transform="translate(0 0)">
                                            <g>
                                                <path
                                                    data-name="Path 16787"
                                                    d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                                    transform="translate(0 -463.248)"
                                                    fill="#fefefe"
                                                />
                                                <path
                                                    data-name="Path 16788"
                                                    d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                                    transform="translate(-1.191 -466.622)"
                                                    fill="#fefefe"
                                                />
                                                <path
                                                    data-name="Path 16789"
                                                    d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                                    transform="translate(-2.875 -466.622)"
                                                    fill="#fefefe"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="items__count">
                                        3
                                    </span>
                                </span>
                            </li>
                            <li className="header__account--items d-none d-lg-block">
                                <Link
                                    className="header__account--btn"
                                    href="/wishlist"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18.541"
                                        height="15.557"
                                        viewBox="0 0 18.541 15.557"
                                    >
                                        <path
                                            d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z"
                                            transform="translate(-62.498 -132.915)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="items__count">
                                        3
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CART OPTIONS */}
                    {/* NAV BAR SHOWN WHEN SCROLLED DOWN */}
                    <div className="header__account header__sticky--block">
                        <ul className="d-flex">
                            <li className="header__account--items  header__account--search__items d-sm-2-none">
                                <span
                                    className="header__account--btn search__open--btn"
                                    data-offcanvas=""
                                >
                                    <svg
                                        className="product__items--action__btn--svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22.51"
                                        height="20.443"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit={
                                                10
                                            }
                                            strokeWidth={32}
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeMiterlimit={
                                                10
                                            }
                                            strokeWidth={32}
                                            d="M338.29 338.29L448 448"
                                        />
                                    </svg>
                                    <span className="visually-hidden">
                                        Search
                                    </span>
                                </span>
                            </li>
                            <li className="header__account--items d-none d-lg-block">
                                <Link
                                    className="header__account--btn"
                                    href="/wishlist"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18.541"
                                        height="15.557"
                                        viewBox="0 0 18.541 15.557"
                                    >
                                        <path
                                            d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z"
                                            transform="translate(-62.498 -132.915)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="items__count">
                                        3
                                    </span>
                                </Link>
                            </li>
                            <li className="header__account--items d-none d-lg-block">
                                <Link
                                    className="header__account--btn"
                                    href="/my-account"
                                >
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
                                    <span className="visually-hidden">
                                        My account
                                    </span>
                                </Link>
                            </li>
                            <li className="header__account--items">
                                <span
                                    className="header__account--btn minicart__open--btn"
                                    data-offcanvas=""
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16.706"
                                        height="15.534"
                                        viewBox="0 0 14.706 13.534"
                                    >
                                        <g transform="translate(0 0)">
                                            <g>
                                                <path
                                                    data-name="Path 16787"
                                                    d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                                    transform="translate(0 -463.248)"
                                                    fill="#fefefe"
                                                />
                                                <path
                                                    data-name="Path 16788"
                                                    d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                                    transform="translate(-1.191 -466.622)"
                                                    fill="#fefefe"
                                                />
                                                <path
                                                    data-name="Path 16789"
                                                    d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                                    transform="translate(-2.875 -466.622)"
                                                    fill="#fefefe"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="items__count">
                                        3
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}