import React from "react";

export default function CartSideBarPreview() {
    return (
        <React.Fragment>
            {/* Start offCanvas minicart */}
            <div className="offCanvas__minicart">
                <div className="minicart__header ">
                    <div className="minicart__header--top d-flex justify-content-between align-items-center">
                        <h3 className="minicart__title">
                            {' '}
                            Shopping Cart
                        </h3>
                        <button
                            className="minicart__close--btn"
                            aria-label="minicart close btn"
                            data-offcanvas=""
                        >
                            <svg
                                className="minicart__close--icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={32}
                                    d="M368 368L144 144M368 144L144 368"
                                />
                            </svg>
                        </button>
                    </div>
                    <p className="minicart__header--desc">
                        The organic foods products are
                        limited
                    </p>
                </div>
                <div className="minicart__product">
                    <div className="minicart__product--items d-flex">
                        <div className="minicart__thumb">
                            <a href="product-details.html">
                                <img
                                    src="assets/img/product/product1.png"
                                    alt="prduct-img"
                                />
                            </a>
                        </div>
                        <div className="minicart__text">
                            <h4 className="minicart__subtitle">
                                <a href="product-details.html">
                                    The is Garden Vegetable.
                                </a>
                            </h4>
                            <span className="color__variant">
                                <b>Color:</b> Beige
                            </span>
                            <div className="minicart__price">
                                <span className="current__price">
                                    $125.00
                                </span>
                                <span className="old__price">
                                    $140.00
                                </span>
                            </div>
                            <div className="minicart__text--footer d-flex align-items-center">
                                <div className="quantity__box minicart__quantity">
                                    <button
                                        type="button"
                                        className="quantity__value decrease"
                                        aria-label="quantity value"
                                        value="Decrease Value"
                                    >
                                        -
                                    </button>
                                    <label>
                                        <input
                                            type="number"
                                            className="quantity__number"
                                            defaultValue={1}
                                            data-counter=""
                                        />
                                    </label>
                                    <button
                                        type="button"
                                        className="quantity__value increase"
                                        aria-label="quantity value"
                                        value="Increase Value"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="minicart__product--remove"
                                    type="button"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="minicart__product--items d-flex">
                        <div className="minicart__thumb">
                            <a href="product-details.html">
                                <img
                                    src="assets/img/product/product2.png"
                                    alt="prduct-img"
                                />
                            </a>
                        </div>
                        <div className="minicart__text">
                            <h4 className="minicart__subtitle">
                                <a href="product-details.html">
                                    Fresh Tomatoe is
                                    organic.
                                </a>
                            </h4>
                            <span className="color__variant">
                                <b>Color:</b> Green
                            </span>
                            <div className="minicart__price">
                                <span className="current__price">
                                    $115.00
                                </span>
                                <span className="old__price">
                                    $130.00
                                </span>
                            </div>
                            <div className="minicart__text--footer d-flex align-items-center">
                                <div className="quantity__box minicart__quantity">
                                    <button
                                        type="button"
                                        className="quantity__value decrease"
                                        aria-label="quantity value"
                                        value="Decrease Value"
                                    >
                                        -
                                    </button>
                                    <label>
                                        <input
                                            type="number"
                                            className="quantity__number"
                                            defaultValue={1}
                                            data-counter=""
                                        />
                                    </label>
                                    <button
                                        type="button"
                                        className="quantity__value increase"
                                        aria-label="quantity value"
                                        value="Increase Value"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="minicart__product--remove"
                                    type="button"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="minicart__amount">
                    <div className="minicart__amount_list d-flex justify-content-between">
                        <span>Sub Total:</span>
                        <span>
                            <b>$240.00</b>
                        </span>
                    </div>
                    <div className="minicart__amount_list d-flex justify-content-between">
                        <span>Total:</span>
                        <span>
                            <b>$240.00</b>
                        </span>
                    </div>
                </div>
                <div className="minicart__conditions text-center">
                    <input
                        className="minicart__conditions--input"
                        id="accept"
                        type="checkbox"
                    />
                    <label
                        className="minicart__conditions--label"
                        htmlFor="accept"
                    >
                        I agree with the{' '}
                        <a
                            className="minicart__conditions--link"
                            href="privacy-policy.html"
                        >
                            Privacy Policy
                        </a>
                    </label>
                </div>
                <div className="minicart__button d-flex justify-content-center">
                    <a
                        className="btn minicart__button--link"
                        href="cart.html"
                    >
                        View cart
                    </a>
                    <a
                        className="btn minicart__button--link"
                        href="checkout.html"
                    >
                        Checkout
                    </a>
                </div>
            </div>
            {/* End offCanvas minicart */}
        </React.Fragment>
    );
}