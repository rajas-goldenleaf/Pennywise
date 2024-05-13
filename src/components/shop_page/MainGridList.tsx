import { useCallback, useEffect, useState } from "react";
import { ProductViewType } from "@/types/project.types";
import FilterTopBar from "./FilterTopBar";
import ListView from "./ListView";
import GridView from "./GridView";
import useProduct from "@/hooks/useProduct";
import useMobileSize from "@/hooks/useMobileSize";
import useSearch from "@/hooks/useSearch";

export default function MainGridList() {
    const mobile = useMobileSize();
    const [productView, setProductView] = useState<ProductViewType>("list_view");

    const handleChangeView = useCallback((view: ProductViewType) => {
        setProductView(view)
    }, []);

    useEffect(() => {
        mobile ? setProductView("list_view") : setProductView("grid_view")
    }, [mobile])

    //TODO: this is not working states are not shared accross different components/ use contextAPI to share state between components, use this context api at layout.tsx page
    const { data = { data: [] } } = useProduct();
    // isLoading ? console.log("Loading") : error ? console.log({ data: error.data, status: error.status }) : console.log(data)
    const { searchResults, isLoading, error, searchText } = useSearch();
    console.log(isLoading)
    console.log(searchText)
    console.log(searchResults)


    return (
        <section className="shop__section section--padding">
            <div className="container">
                {/* FILTER BAR  */}
                <FilterTopBar changeView={handleChangeView} currentView={productView} />
                <div className="row">
                    <div className="col-12">
                        <div className="shop__product--wrapper">
                            <div className="tab_content" style={{ minHeight: "100vh" }}>
                                {
                                    productView == "grid_view" ?
                                        <GridView productData={data.data} isLoading={isLoading} />
                                        :
                                        <ListView productData={data.data} isLoading={isLoading} />
                                }


                            </div>
                            <div className="pagination__area bg__gray--color">
                                <nav className="pagination justify-content-center">
                                    <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                                        <li className="pagination__list">
                                            <a
                                                href="shop.html"
                                                className="pagination__item--arrow  link "
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22.51"
                                                    height="20.443"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={48}
                                                        d="M244 400L100 256l144-144M120 256h292"
                                                    />
                                                </svg>
                                                <span className="visually-hidden">page left arrow</span>
                                            </a>
                                        </li>
                                        <li></li>
                                        <li className="pagination__list">
                                            <span className="pagination__item pagination__item--current">
                                                1
                                            </span>
                                        </li>
                                        <li className="pagination__list">
                                            <a href="shop.html" className="pagination__item link">
                                                2
                                            </a>
                                        </li>
                                        <li className="pagination__list">
                                            <a href="shop.html" className="pagination__item link">
                                                3
                                            </a>
                                        </li>
                                        <li className="pagination__list">
                                            <a href="shop.html" className="pagination__item link">
                                                4
                                            </a>
                                        </li>
                                        <li className="pagination__list">
                                            <a
                                                href="shop.html"
                                                className="pagination__item--arrow  link "
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22.51"
                                                    height="20.443"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={48}
                                                        d="M268 112l144 144-144 144M392 256H100"
                                                    />
                                                </svg>
                                                <span className="visually-hidden">page right arrow</span>
                                            </a>
                                        </li>
                                        <li></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}