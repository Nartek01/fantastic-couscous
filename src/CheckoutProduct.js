import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({image, title, price, rating}) {
    return (
        <div className="checkoutProduct">
            <img src={image} className={"checkouProduct__image"} alt="product images"/>
            <div className="checkoutProduct__info">
                <p className={"checkoutProduct__title"}>{title}</p>
                <p className={"checkoutProduct__price"}>
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="checkoutProduct__rating">
                        {Array(rating)
                            .fill()
                            .map(() => (
                                <p>🌟</p>
                            ))}
                    </div>
                </p>
            </div>
            <button>Remove from Basket</button>
        </div>
    )
}

export default CheckoutProduct;