import { ProductType } from "@/types/project.types"
import Link from "next/link"
import RatingComponent from "../elements/Rating"
import ContentLoader from "react-content-loader";
import useMobileSize from "@/hooks/useMobileSize";
import React from "react";

type ListViewProps = {
    productData: ProductType[],
    isLoading: boolean
}
// <div className="col mb-30" key={idx}><ListViewSkeleton keyIndex={idx.toString()} /></div>
export default function ListView({ productData, isLoading }: ListViewProps) {
    return (
        <div id="product_list" className="tab_pane active show">
            <div className="product__section--inner product__section--style3__inner">
                <div className="row row-cols-1 mb--n30">
                    {
                        isLoading ?
                            Array.from(new Array(10).keys()).map((idx) => (
                                <div className="col mb-30" key={idx}>
                                    <ListViewSkeleton keyIndex={idx.toString()} />
                                </div>
                            ))
                            :
                            productData?.map((item, idx) => (
                                <div className="col mb-30" key={idx}>
                                    <div className="product__items product__list--items d-flex">
                                        <div className="product__items--thumbnail product__list--items__thumbnail">
                                            <Link
                                                className="product__items--link"
                                                href={`/shop/${item.id}`}
                                            >
                                                <img
                                                    className="product__items--img product__primary--img"
                                                    src={`assets/img/product/${item.image}`}
                                                    alt={item.product}
                                                />
                                                <img
                                                    className="product__items--img product__secondary--img"
                                                    src={`assets/img/product/${item.image}`}
                                                    alt={item.product}
                                                />
                                            </Link>
                                            <div className="product__badge">
                                                <span className="product__badge--items sale">
                                                    Sale
                                                </span>
                                            </div>
                                            <ul className="product__items--action">
                                                <li className="product__items--action__list">
                                                    <a
                                                        className="product__items--action__btn"
                                                        href="wishlist.html"
                                                    >
                                                        <svg
                                                            className="product__items--action__btn--svg"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path
                                                                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={32}
                                                            />
                                                        </svg>
                                                        <span className="visually-hidden">Wishlist</span>
                                                    </a>
                                                </li>
                                                <li className="product__items--action__list">
                                                    <span
                                                        className="product__items--action__btn"
                                                        data-open="modal1"
                                                    >
                                                        <svg
                                                            className="product__items--action__btn--svg"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path
                                                                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeMiterlimit={10}
                                                                strokeWidth={32}
                                                            />
                                                            <path
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeMiterlimit={10}
                                                                strokeWidth={32}
                                                                d="M338.29 338.29L448 448"
                                                            />
                                                        </svg>
                                                        <span className="visually-hidden">
                                                            Quick View
                                                        </span>
                                                    </span>
                                                </li>
                                                <li className="product__items--action__list">
                                                    <a
                                                        className="product__items--action__btn"
                                                        href="compare.html"
                                                    >
                                                        <svg
                                                            className="product__items--action__btn--svg"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={32}
                                                                d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"
                                                            />
                                                            <path
                                                                d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={32}
                                                            />
                                                        </svg>
                                                        <span className="visually-hidden">Compare</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__list--items__content">
                                            <h3 className="product__list--items__content--title h4 mb-10">
                                                <a href="product-details.html">{item.product}</a>
                                            </h3>
                                            <div className="product__items--price mb-10">
                                                <span className="current__price">{item.price}</span>
                                                <span className="old__price">{item.discount}</span>
                                            </div>
                                            <div className="product__items--rating mb-15 d-flex align-items-center mb-10">
                                                <RatingComponent people={item.id} rating={item.rating} />
                                            </div>
                                            {/* <p className="product__list--items__content--desc mb-20">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing
                                            elit. Quia voluptas dolore doloribus architecto sequi
                                            corporis deleniti officia culpa dolor esse consectetur
                                            eligendi, natus at rem ab quae amet molestiae quod
                                            voluptates, illo exercitationem numquam ipsa. Est fuga
                                            ex ipsum alias ipsa quibusdam magni harum labore
                                            voluptate, esse deserunt saepe eveniet.
                                        </p> */}
                                            <button className="btn add__to--cart__btn2">
                                                + Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

// let mobile = window.matchMedia("(max-width: 600px)").matches;
type KeyIndexType = { keyIndex: string }
function ListViewSkeleton({ keyIndex }: KeyIndexType) {
    const mobile = useMobileSize()

    return (
        <React.Fragment>
            {
                !mobile ?
                    <ListViewSkeletonDesktop keyIndex={keyIndex} />
                    :
                    <ListViewSkeletonMobile keyIndex={keyIndex} />

            }
        </React.Fragment>
    )
}
function ListViewSkeletonMobile({ keyIndex }: KeyIndexType) {
    return (
        <ContentLoader
            width={367}
            height={137}
            backgroundColor="#bfbfbf"
            foregroundColor="#fafafa"
            uniqueKey={keyIndex}
        >
            <rect x="140" y="13" rx="2" ry="2" width="180" height="20" />
            <rect x="140" y="40" rx="5" ry="5" width="100" height="15" />
            <rect x="140" y="67" rx="2" ry="2" width="70" height="9" />
            {/* button */}
            <rect x="140" y="94" rx="20" ry="20" width="117" height="36" />
            {/* image */}
            <rect x="0" y="10" rx="0" ry="0" width="132" height="160" />
        </ContentLoader >
    )
}

function ListViewSkeletonDesktop({ keyIndex }: KeyIndexType) {
    return (
        <ContentLoader
            width={1200}
            height={280}
            backgroundColor="#bfbfbf"
            foregroundColor="#fafafa"
            uniqueKey={keyIndex}
        >
            <rect x="320" y="20" rx="5" ry="5" width="300" height="20" />
            <rect x="320" y="50" rx="5" ry="5" width="220" height="18" />
            <rect x="320" y="80" rx="2" ry="2" width="110" height="9" />
            <rect x="440" y="80" rx="2" ry="2" width="20" height="9" />
            {/* paragraph */}
            <rect x="320" y="120" rx="25" ry="25" width="137" height="44" />

            <rect x="20" y="10" rx="0" ry="0" width="275" height="285" />
        </ContentLoader>
    )
}