import React from 'react'
import { Rating } from 'react-simple-star-rating'

type RatingPropsType = {
    rating: number,
    people: number
}

export default function RatingComponent({ rating, people }: RatingPropsType) {
    return (
        <React.Fragment>
            <span className="d-flex justify-center">
                <span>
                    <Rating initialValue={rating} allowHover={false} allowFraction={true} size={12} readonly={true} />
                </span>
            </span>
            <span className="product__items--rating__count--number">
                {people}
            </span>
        </React.Fragment>
    )
}

/**
 * 
 
                 <li className="product__items--rating__list">
                            <span className="product__items--rating__icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                width="10.105"
                                height="9.732"
                                    viewBox="0 0 10.105 9.732"
                                >
                                    <path
                                        data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                        </li> 
 <li className="product__items--rating__list">
                    <span className="product__items--rating__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10.105"
                            height="9.732"
                            viewBox="0 0 10.105 9.732"
                        >
                            <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                </li>
                <li className="product__items--rating__list">
                    <span className="product__items--rating__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10.105"
                            height="9.732"
                            viewBox="0 0 10.105 9.732"
                        >
                            <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                </li>
                <li className="product__items--rating__list">
                    <span className="product__items--rating__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10.105"
                            height="9.732"
                            viewBox="0 0 10.105 9.732"
                        >
                            <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                </li>
                <li className="product__items--rating__list">
                    <span className="product__items--rating__icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10.105"
                            height="9.732"
                            viewBox="0 0 10.105 9.732"
                        >
                            <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="#c7c5c2"
                            />
                        </svg>
                    </span>
                </li> 
*/