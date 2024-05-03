type BreadcrumbProps = {
    title: string,
    menuItem?: string[]
}
export default function Breadcrumb({ title, menuItem }: BreadcrumbProps) {
    return (
        <section className="breadcrumb__section breadcrumb__bg">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col">
                        <div className="breadcrumb__content text-center">
                            <h1 className="breadcrumb__content--title text-white mb-25">
                                {title}
                            </h1>
                            <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                {
                                    menuItem?.map((item, idx) => (
                                        <li className="breadcrumb__content--menu__items" key={idx}>
                                            <span className="text-white">{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}