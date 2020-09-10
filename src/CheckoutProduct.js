import React, { useState } from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import Fade from 'react-reveal/Fade';
import { store } from 'react-notifications-component';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [fadeOut, setFadeOut] = useState(0)

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id
        })
        store.addNotification({
            title: "Removed from the basket!",
            message: title + " - $" + price,
            type: "danger",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
    }

    return (
        <Fade bottom>
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        [...Array(rating).keys()]
                            .map((_, i) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
        </Fade>
    )
}

export default CheckoutProduct
