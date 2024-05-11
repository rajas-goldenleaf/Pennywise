import { ProductType } from "@/types/project.types"
import Link from "next/link"
import ContentLoader from "react-content-loader";
import RatingComponent from "../elements/Rating"

type GridViewProps = {
    productData: ProductType[],
    isLoading: boolean
}
export default function GridView({ productData, isLoading }: GridViewProps) {
    return (
        <div id="product_grid" className="tab_pane active show">
            <div className="product__section--inner product__section--style3__inner">
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 mb--n30">
                    {
                        isLoading ?
                            Array.from(new Array(10).keys()).map((item, idx) =>
                                <div key={idx}>
                                    <Skeleton uniqueKey={idx.toString()} />
                                </div>
                            )
                            :
                            productData?.map((item: ProductType, idx: number) => (
                                <div className="col mb-30" key={idx}>
                                    <div className="product__items product__items2">
                                        <div className="product__items--thumbnail">

                                            <Link
                                                className="product__items--link"
                                                href={`product-details/${item.id}`}
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
                                        <div className="product__items--content product__items2--content text-center">
                                            <a className="add__to--cart__btn" href="cart.html">
                                                + Add to cart
                                            </a>
                                            <h3 className="product__items--content__title h4">
                                                <a href="product-details.html">{item.product}</a>
                                            </h3>
                                            <div className="product__items--price">
                                                <span className="current__price">{item.price}</span>
                                                <span className="old__price">{item.discount}</span>
                                            </div>
                                            <div className="product__items--rating d-flex justify-content-center align-items-center">
                                                <RatingComponent rating={item.rating} people={item.id} />
                                            </div>
                                        </div>
                                        <div className="text-center">
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

function Skeleton(props: any) {
    return (
        <ContentLoader viewBox="0 0 300 430" height={430} width={300} {...props}>
            <rect x="0" y="0" rx="0" ry="0" width="270" height="280" />
            <rect x="0" y="290" rx="0" ry="0" width="270" height="20" />
            <rect x="0" y="320" rx="0" ry="0" width="270" height="20" />
            <rect x="0" y="350" rx="0" ry="0" width="270" height="20" />
            {/* <rect x="0" y="380" rx="0" ry="0" width="270" height="20" /> */}
        </ContentLoader>
    )
}