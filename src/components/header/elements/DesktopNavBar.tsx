import Link from "next/link";

export default function DesktopNavBar() {
    return (
        <div className="header__bottom bg__secondary">
            <div className="container">
                <div className="header__bottom--inner position__relative d-flex align-items-center justify-center">
                    {/* CATEGORIES MENUE */}
                    {/* <CategoriesMenu /> */}
                    {/* SECOND NAVBAR */}
                    <div className="header__right--area d-flex justify-content-between align-items-center justify-center m-auto">
                        <div className="header__menu">
                            <nav className="header__menu--navigation">
                                <ul className="d-flex">
                                    <li className="header__menu--items">
                                        <Link
                                            className="header__menu--link text-white"
                                            href="/"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="header__menu--items mega__menu--items">
                                        <Link
                                            className="header__menu--link text-white"
                                            href="/shop"
                                        >
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="header__menu--items">
                                        <Link
                                            className="header__menu--link text-white"
                                            href="/blog"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="header__menu--items">
                                        <Link
                                            className="header__menu--link text-white"
                                            href="/about-us"
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="header__menu--items">
                                        <Link
                                            className="header__menu--link text-white"
                                            href="/contact"
                                        >
                                            Contact{' '}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* PRICE/MONEY OPTIONS */}
                        <div className="header__right--info d-flex align-items-center">
                            {/* <div className="account__currency">
                                <a
                                    className="account__currency--link text-white"
                                    href="/somewhere"
                                >
                                    <img
                                        src="assets/img/icon/usd-icon.png"
                                        alt="currency"
                                    />
                                    <span>USD</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="9.797"
                                        height="6.05"
                                        viewBox="0 0 9.797 6.05"
                                    >
                                        <path
                                            d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                                            transform="translate(-6 -8.59)"
                                            fill="currentColor"
                                            opacity="0.7"
                                        />
                                    </svg>
                                </a>
                                <div className="dropdown__currency">
                                    <ul>
                                        <li className="currency__items">
                                            <a
                                                className="currency__text"
                                                href="/"
                                            >
                                                CAD
                                            </a>
                                        </li>
                                        <li className="currency__items">
                                            <a
                                                className="currency__text"
                                                href="/"
                                            >
                                                CNY
                                            </a>
                                        </li>
                                        <li className="currency__items">
                                            <a
                                                className="currency__text"
                                                href="/"
                                            >
                                                EUR
                                            </a>
                                        </li>
                                        <li className="currency__items">
                                            <a
                                                className="currency__text"
                                                href="/"
                                            >
                                                GBP
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* SUPPORT/CALL-US */}
                            <div className="suport__contact d-flex align-items-center">
                                <svg
                                    className="suport__contact--icon text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="36.725"
                                    height="36.743"
                                    viewBox="0 0 36.725 36.743"
                                >
                                    <path
                                        id="headphone-alt-2"
                                        d="M28.893,18.469c-.026-2.873.1-5.754-.761-8.565-1.587-5.21-5.306-7.742-10.781-7.272-4.681.4-7.588,2.715-8.785,7.573a24.031,24.031,0,0,0,.2,13.3,11.447,11.447,0,0,0,6.254,7.253c.658.3,1.091.408,1.595-.356a3.732,3.732,0,0,1,4.38-1.334,3.931,3.931,0,1,1-4.582,5.82,2.989,2.989,0,0,0-1.782-1.466c-4.321-1.573-6.842-4.869-8.367-9.032a1.686,1.686,0,0,0-1.238-1.275,7.046,7.046,0,0,1-3.718-2.447A5.739,5.739,0,0,1,3.242,11.83,5.338,5.338,0,0,0,6.318,7.957C7.644,3.033,11.62.193,16.845.02a19.923,19.923,0,0,1,6.324.544c4.479,1.3,6.783,4.52,7.72,8.881a1.966,1.966,0,0,0,1.389,1.723,6.235,6.235,0,0,1,4.439,6.324,5.211,5.211,0,0,1-1.33,3.27,7.98,7.98,0,0,1-5.449,2.774c-.731.077-1.124-.051-1.069-.952.085-1.367.022-2.745.026-4.115Z"
                                        transform="translate(0.006 0.01)"
                                        fill="currentColor"
                                    />
                                </svg>
                                <p className="suport__contact--text text-white">
                                    <span className="suport__text--24">
                                        24/7 Suport
                                    </span>
                                    <a
                                        className="suport__contact--number"
                                        href="tel:09786542214"
                                    >
                                        09 7865 42214
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CategoriesMenu() {
    return (
        <div className="categories__menu">
            <div className="categories__menu--header text-white d-flex align-items-center">
                <svg
                    className="categories__list--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.007"
                    height="16.831"
                    viewBox="0 0 21.007 16.831"
                >
                    <path
                        id="listine-dots"
                        d="M20.66,99.786a1.036,1.036,0,0,0-.347-.13H4.227a2.013,2.013,0,0,1,0,3.012q7.988,0,15.976,0h.063a.7.7,0,0,0,.454-.162.9.9,0,0,0,.286-.452v-1.765A.861.861,0,0,0,20.66,99.786ZM3.323,101.162A1.662,1.662,0,1,1,1.662,99.5,1.661,1.661,0,0,1,3.323,101.162Zm16.99,3H4.227a2.013,2.013,0,0,1,0,3.012q7.988,0,15.976,0h.063a.7.7,0,0,0,.454-.164.9.9,0,0,0,.286-.452v-1.765a.861.861,0,0,0-.347-.5A1.082,1.082,0,0,0,20.314,104.161Zm-16.99,1.506a1.662,1.662,0,1,1-1.662-1.662A1.663,1.663,0,0,1,3.323,105.668Zm16.99,3H4.227a2.013,2.013,0,0,1,0,3.012q7.988,0,15.976,0h.063a.7.7,0,0,0,.454-.164.9.9,0,0,0,.286-.45v-1.767a.861.861,0,0,0-.347-.5A1.083,1.083,0,0,0,20.314,108.663Zm-16.99,1.506a1.662,1.662,0,1,1-1.662-1.662A1.663,1.663,0,0,1,3.323,110.169Zm16.99,2.993H4.227a2.013,2.013,0,0,1,0,3.012q7.988,0,15.976,0h.063a.687.687,0,0,0,.454-.162.9.9,0,0,0,.286-.452v-1.765a.861.861,0,0,0-.347-.5A1.035,1.035,0,0,0,20.314,113.163Zm-16.99,1.506a1.662,1.662,0,1,1-1.662-1.662A1.661,1.661,0,0,1,3.323,114.669Z"
                        transform="translate(0 -99.5)"
                        fill="currentColor"
                    />
                </svg>
                <span className="categories__menu--title">
                    All Categories
                </span>
                <svg
                    className="categories__arrowdown--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.355"
                    height="8.394"
                    viewBox="0 0 10.355 6.394"
                >
                    <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <div className="dropdown__categories--menu">
                <ul className="d-none d-lg-block">
                    <li className="categories__menu--items">
                        <a
                            className="categories__menu--link"
                            href="shop.html"
                        >
                            <svg
                                className="categories__menu--svgicon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <ellipse
                                    cx={256}
                                    cy={256}
                                    rx="267.57"
                                    ry="173.44"
                                    transform="rotate(-45 256 256.002)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                    d="M334.04 177.96L177.96 334.04M278.3 278.3l-44.6-44.6M322.89 233.7l-44.59-44.59M456.68 211.4L300.6 55.32M211.4 456.68L55.32 300.6M233.7 322.89l-44.59-44.59"
                                />
                            </svg>{' '}
                            Fruits &amp;
                            Vegetables
                        </a>
                    </li>
                    <li className="categories__menu--items">
                        <a
                            className="categories__menu--link"
                            href="shop.html"
                        >
                            <svg
                                className="categories__menu--svgicon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit={
                                        10
                                    }
                                    strokeWidth={
                                        32
                                    }
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                    d="M256 176v160M336 256H176"
                                />
                            </svg>{' '}
                            Fresh Fruits
                            <svg
                                className="categories__menu--right__arrow--icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="17.007"
                                height="16.831"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        48
                                    }
                                    d="M184 112l144 144-144 144"
                                />
                            </svg>
                        </a>
                        <ul className="categories__submenu border-radius-10 d-flex justify-content-between">
                            <li className="categories__submenu--items">
                                <a
                                    className="categories__submenu--items__text"
                                    href="shop.html"
                                >
                                    <strong>
                                        Fresh
                                        Berries
                                    </strong>
                                </a>
                                <ul className="categories__submenu--child">
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Apple
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Oil
                                            and
                                            Vinegar{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Bread
                                            and
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            AFresh
                                            Seafood{' '}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="categories__submenu--items">
                                <a
                                    className="categories__submenu--items__text"
                                    href="shop.html"
                                >
                                    <strong>
                                        Orange
                                        Juice
                                    </strong>
                                </a>
                                <ul className="categories__submenu--child">
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Apple
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Oil
                                            and
                                            Vinegar{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Bread
                                            and
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            AFresh
                                            Seafood{' '}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="categories__submenu--items">
                                <a
                                    className="categories__submenu--items__text"
                                    href="shop.html"
                                >
                                    <strong>
                                        Fresh
                                        Nuts
                                    </strong>
                                </a>
                                <ul className="categories__submenu--child">
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Apple
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Oil
                                            and
                                            Vinegar{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Bread
                                            and
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            AFresh
                                            Seafood{' '}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="categories__submenu--items">
                                <a
                                    className="categories__submenu--items__text"
                                    href="shop.html"
                                >
                                    <strong>
                                        Laura
                                        Mercier
                                    </strong>
                                </a>
                                <ul className="categories__submenu--child">
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Apple
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Oil
                                            and
                                            Vinegar{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Bread
                                            and
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            AFresh
                                            Seafood{' '}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="categories__menu--items">
                        <a
                            className="categories__menu--link"
                            href="shop.html"
                        >
                            <svg
                                className="categories__menu--svgicon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 01256 32h0c28.55 0 51.69 23.69 51.69 51.69 0 16.5-5.85 48.95-10.77 73.23M215.08 355.08c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 00256 480h0c28.55 0 51.69-23.69 51.69-51.69 0-16.54-5.85-48.93-10.77-73.23M355.08 215.08c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 01480 256h0c0 28.55-23.69 51.69-51.69 51.69-16.5 0-48.95-5.85-73.23-10.77M156.92 215.07c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0032 256h0c0 28.55 23.69 51.69 51.69 51.69 16.5 0 48.95-5.85 73.23-10.77"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={
                                        10
                                    }
                                    strokeWidth={
                                        32
                                    }
                                />
                                <path
                                    d="M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0173.1 0h0c20.19 20.19 19.8 53.3 0 73.1-11.66 11.67-38.67 30.67-59.31 44.37M156.92 296.92c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 000 73.1h0c20.19 20.19 53.3 19.8 73.1 0 11.67-11.66 30.67-38.67 44.37-59.31M355.08 296.92c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 010 73.1h0c-20.19 20.19-53.3 19.8-73.1 0-11.69-11.69-30.66-38.65-44.37-59.31M215.08 156.92c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 00-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1 11.61 11.61 38.7 30.68 59.31 44.37"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={
                                        10
                                    }
                                    strokeWidth={
                                        32
                                    }
                                />
                                <circle
                                    cx={256}
                                    cy={256}
                                    r={64}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={
                                        10
                                    }
                                    strokeWidth={
                                        32
                                    }
                                />
                            </svg>{' '}
                            Vegetables
                        </a>
                    </li>
                    <li className="categories__menu--items">
                        <a
                            className="categories__menu--link"
                            href="shop.html"
                        >
                            <svg
                                className="categories__menu--svgicon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                />
                            </svg>{' '}
                            Organics
                            <svg
                                className="categories__menu--right__arrow--icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="17.007"
                                height="16.831"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        48
                                    }
                                    d="M184 112l144 144-144 144"
                                />
                            </svg>
                        </a>
                        <ul className="categories__submenu border-radius-10 d-flex justify-content-between">
                            <li className="categories__submenu--items">
                                <a
                                    className="categories__submenu--items__text"
                                    href="shop.html"
                                >
                                    <strong>
                                        Hot
                                        Offers
                                    </strong>
                                </a>
                                <ul className="categories__submenu--child">
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            {' '}
                                            AFresh
                                            Seafood
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Oil
                                            and
                                            Vinegar{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Bread
                                            and
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            {' '}
                                            Apple
                                            Juice
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="categories__submenu--items">
                                <a
                                    className="categories__submenu--items__text"
                                    href="shop.html"
                                >
                                    <strong>
                                        Fresh
                                        Meat
                                    </strong>
                                </a>
                                <ul className="categories__submenu--child">
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Apple
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Oil
                                            and
                                            Vinegar{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Bread
                                            and
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            AFresh
                                            Seafood{' '}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="categories__submenu--items">
                                <a
                                    className="categories__submenu--items__text"
                                    href="shop.html"
                                >
                                    <strong>
                                        Nature
                                        Food
                                    </strong>
                                </a>
                                <ul className="categories__submenu--child">
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Apple
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Oil
                                            and
                                            Vinegar{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Bread
                                            and
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            AFresh
                                            Seafood{' '}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="categories__submenu--items">
                                <a
                                    className="categories__submenu--items__text"
                                    href="shop.html"
                                >
                                    <strong>
                                        Laura
                                        Mercier
                                    </strong>
                                </a>
                                <ul className="categories__submenu--child">
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Apple
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Oil
                                            and
                                            Vinegar{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            Bread
                                            and
                                            Juice{' '}
                                        </a>
                                    </li>
                                    <li className="categories__submenu--child__items">
                                        <a
                                            className="categories__submenu--child__items--link"
                                            href="shop.html"
                                        >
                                            AFresh
                                            Seafood{' '}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="categories__menu--items">
                        <a
                            className="categories__menu--link"
                            href="shop.html"
                        >
                            <svg
                                className="categories__menu--svgicon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <circle
                                    cx={256}
                                    cy={184}
                                    r={120}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                />
                                <circle
                                    cx={344}
                                    cy={328}
                                    r={120}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                />
                                <circle
                                    cx={168}
                                    cy={328}
                                    r={120}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                />
                            </svg>{' '}
                            Beauty &amp; Care
                        </a>
                    </li>
                    <li className="categories__menu--items">
                        <a
                            className="categories__menu--link"
                            href="shop.html"
                        >
                            <svg
                                className="categories__menu--svgicon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={
                                        32
                                    }
                                    strokeLinejoin="round"
                                    d="M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 00-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0023.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96z"
                                />
                                <circle
                                    cx={416}
                                    cy="239.99"
                                    r={16}
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={
                                        32
                                    }
                                    strokeLinecap="round"
                                    strokeMiterlimit={
                                        20
                                    }
                                    d="M378.37 356a199.22 199.22 0 010-200"
                                />
                            </svg>{' '}
                            Fresh Fish
                        </a>
                    </li>
                    <li className="categories__menu--items">
                        <a
                            className="categories__menu--link"
                            href="shop.html"
                        >
                            <svg
                                className="categories__menu--svgicon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                />
                            </svg>{' '}
                            Nature
                        </a>
                    </li>
                    <li className="categories__menu--items">
                        <a
                            className="categories__menu--link"
                            href="shop.html"
                        >
                            <svg
                                className="categories__menu--svgicon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <circle
                                    cx={256}
                                    cy={184}
                                    r={120}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                />
                                <circle
                                    cx={344}
                                    cy={328}
                                    r={120}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                />
                                <circle
                                    cx={168}
                                    cy={328}
                                    r={120}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                />
                            </svg>{' '}
                            Fresh Berries
                        </a>
                    </li>
                    <li className="categories__menu--items">
                        <a
                            className="categories__menu--link"
                            href="shop.html"
                        >
                            <svg
                                className="categories__menu--svgicon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={
                                        10
                                    }
                                    strokeWidth={
                                        32
                                    }
                                />
                                <path
                                    d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={
                                        10
                                    }
                                    strokeWidth={
                                        32
                                    }
                                />
                                <path
                                    d="M256 480h139.31a32 32 0 0031.91-29.61L463 112"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={
                                        10
                                    }
                                    strokeWidth={
                                        32
                                    }
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                        32
                                    }
                                    d="M368 112l16-64 47-16"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit={
                                        10
                                    }
                                    strokeWidth={
                                        32
                                    }
                                    d="M224 112h256"
                                />
                            </svg>{' '}
                            Bread &amp; Bakery
                        </a>
                    </li>
                </ul>
                <nav className="category__mobile--menu">
                    <ul className="category__mobile--menu_ul">
                        <li className="categories__menu--items">
                            <a
                                className="categories__menu--link"
                                href="shop.html"
                            >
                                <svg
                                    className="categories__menu--svgicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <ellipse
                                        cx={256}
                                        cy={256}
                                        rx="267.57"
                                        ry="173.44"
                                        transform="rotate(-45 256 256.002)"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                        d="M334.04 177.96L177.96 334.04M278.3 278.3l-44.6-44.6M322.89 233.7l-44.59-44.59M456.68 211.4L300.6 55.32M211.4 456.68L55.32 300.6M233.7 322.89l-44.59-44.59"
                                    />
                                </svg>{' '}
                                Fruits &amp;
                                Vegetables
                            </a>
                        </li>
                        <li className="categories__menu--items">
                            <a
                                className="categories__menu--link"
                                href="shop.html"
                            >
                                <svg
                                    className="categories__menu--svgicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit={
                                            10
                                        }
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                        d="M256 176v160M336 256H176"
                                    />
                                </svg>{' '}
                                Fresh Fruits
                            </a>
                            <ul className="category__sub--menu">
                                <li className="categories__submenu--items">
                                    <a
                                        className="categories__submenu--items__text"
                                        href="shop.html"
                                    >
                                        Fresh
                                        Berries
                                    </a>
                                    <ul className="category__sub--menu">
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Apple
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Oil
                                                and
                                                Vinegar{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Bread
                                                and
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                AFresh
                                                Seafood{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="categories__submenu--items">
                                    <a
                                        className="categories__submenu--items__text"
                                        href="shop.html"
                                    >
                                        Orange
                                        Juice
                                    </a>
                                    <ul className="category__sub--menu">
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Apple
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Oil
                                                and
                                                Vinegar{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Bread
                                                and
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                AFresh
                                                Seafood{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="categories__submenu--items">
                                    <a
                                        className="categories__submenu--items__text"
                                        href="shop.html"
                                    >
                                        Fresh
                                        Nuts
                                    </a>
                                    <ul className="category__sub--menu">
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Apple
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Oil
                                                and
                                                Vinegar{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Bread
                                                and
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                AFresh
                                                Seafood{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="categories__submenu--items">
                                    <a
                                        className="categories__submenu--items__text"
                                        href="shop.html"
                                    >
                                        Laura
                                        Mercier
                                    </a>
                                    <ul className="category__sub--menu">
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Apple
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Oil
                                                and
                                                Vinegar{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Bread
                                                and
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                AFresh
                                                Seafood{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="categories__menu--items">
                            <a
                                className="categories__menu--link"
                                href="shop.html"
                            >
                                <svg
                                    className="categories__menu--svgicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 01256 32h0c28.55 0 51.69 23.69 51.69 51.69 0 16.5-5.85 48.95-10.77 73.23M215.08 355.08c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 00256 480h0c28.55 0 51.69-23.69 51.69-51.69 0-16.54-5.85-48.93-10.77-73.23M355.08 215.08c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 01480 256h0c0 28.55-23.69 51.69-51.69 51.69-16.5 0-48.95-5.85-73.23-10.77M156.92 215.07c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0032 256h0c0 28.55 23.69 51.69 51.69 51.69 16.5 0 48.95-5.85 73.23-10.77"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={
                                            10
                                        }
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <path
                                        d="M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0173.1 0h0c20.19 20.19 19.8 53.3 0 73.1-11.66 11.67-38.67 30.67-59.31 44.37M156.92 296.92c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 000 73.1h0c20.19 20.19 53.3 19.8 73.1 0 11.67-11.66 30.67-38.67 44.37-59.31M355.08 296.92c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 010 73.1h0c-20.19 20.19-53.3 19.8-73.1 0-11.69-11.69-30.66-38.65-44.37-59.31M215.08 156.92c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 00-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1 11.61 11.61 38.7 30.68 59.31 44.37"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={
                                            10
                                        }
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <circle
                                        cx={256}
                                        cy={256}
                                        r={64}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={
                                            10
                                        }
                                        strokeWidth={
                                            32
                                        }
                                    />
                                </svg>{' '}
                                Vegetables
                            </a>
                        </li>
                        <li className="categories__menu--items">
                            <a
                                className="categories__menu--link"
                                href="shop.html"
                            >
                                <svg
                                    className="categories__menu--svgicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                    />
                                </svg>{' '}
                                Organics
                            </a>
                            <ul className="category__sub--menu">
                                <li className="categories__submenu--items">
                                    <a
                                        className="categories__submenu--items__text"
                                        href="shop.html"
                                    >
                                        Hot
                                        Offers
                                    </a>
                                    <ul className="category__sub--menu">
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Apple
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Oil
                                                and
                                                Vinegar{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Bread
                                                and
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                AFresh
                                                Seafood{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="categories__submenu--items">
                                    <a
                                        className="categories__submenu--items__text"
                                        href="shop.html"
                                    >
                                        Fresh
                                        Meat
                                    </a>
                                    <ul className="category__sub--menu">
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Apple
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Oil
                                                and
                                                Vinegar{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Bread
                                                and
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                AFresh
                                                Seafood{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="categories__submenu--items">
                                    <a
                                        className="categories__submenu--items__text"
                                        href="shop.html"
                                    >
                                        Nature
                                        Food
                                    </a>
                                    <ul className="category__sub--menu">
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Apple
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Oil
                                                and
                                                Vinegar{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Bread
                                                and
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                AFresh
                                                Seafood{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="categories__submenu--items">
                                    <a
                                        className="categories__submenu--items__text"
                                        href="shop.html"
                                    >
                                        Laura
                                        Mercier
                                    </a>
                                    <ul className="category__sub--menu">
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Apple
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Oil
                                                and
                                                Vinegar{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                Bread
                                                and
                                                Juice{' '}
                                            </a>
                                        </li>
                                        <li className="categories__submenu--child__items">
                                            <a
                                                className="categories__submenu--child__items--link"
                                                href="shop.html"
                                            >
                                                AFresh
                                                Seafood{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="categories__menu--items">
                            <a
                                className="categories__menu--link"
                                href="shop.html"
                            >
                                <svg
                                    className="categories__menu--svgicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <circle
                                        cx={256}
                                        cy={184}
                                        r={120}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <circle
                                        cx={344}
                                        cy={328}
                                        r={120}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <circle
                                        cx={168}
                                        cy={328}
                                        r={120}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                    />
                                </svg>{' '}
                                Beauty &amp;
                                Care
                            </a>
                        </li>
                        <li className="categories__menu--items">
                            <a
                                className="categories__menu--link"
                                href="shop.html"
                            >
                                <svg
                                    className="categories__menu--svgicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={
                                            32
                                        }
                                        strokeLinejoin="round"
                                        d="M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 00-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0023.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96z"
                                    />
                                    <circle
                                        cx={416}
                                        cy="239.99"
                                        r={16}
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={
                                            32
                                        }
                                        strokeLinecap="round"
                                        strokeMiterlimit={
                                            20
                                        }
                                        d="M378.37 356a199.22 199.22 0 010-200"
                                    />
                                </svg>{' '}
                                Fresh Fish
                            </a>
                        </li>
                        <li className="categories__menu--items">
                            <a
                                className="categories__menu--link"
                                href="shop.html"
                            >
                                <svg
                                    className="categories__menu--svgicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58zM173 253c86 81 175 129 292 147"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                    />
                                </svg>{' '}
                                Nature
                            </a>
                        </li>
                        <li className="categories__menu--items">
                            <a
                                className="categories__menu--link"
                                href="shop.html"
                            >
                                <svg
                                    className="categories__menu--svgicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <circle
                                        cx={256}
                                        cy={184}
                                        r={120}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <circle
                                        cx={344}
                                        cy={328}
                                        r={120}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <circle
                                        cx={168}
                                        cy={328}
                                        r={120}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                    />
                                </svg>{' '}
                                Fresh Berries
                            </a>
                        </li>
                        <li className="categories__menu--items">
                            <a
                                className="categories__menu--link"
                                href="shop.html"
                            >
                                <svg
                                    className="categories__menu--svgicon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={
                                            10
                                        }
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <path
                                        d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={
                                            10
                                        }
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <path
                                        d="M256 480h139.31a32 32 0 0031.91-29.61L463 112"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={
                                            10
                                        }
                                        strokeWidth={
                                            32
                                        }
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={
                                            32
                                        }
                                        d="M368 112l16-64 47-16"
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={
                                            10
                                        }
                                        strokeWidth={
                                            32
                                        }
                                        d="M224 112h256"
                                    />
                                </svg>{' '}
                                Bread &amp;
                                Bakery
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}