import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="image1.png" />
                <div>
                    {
                        basket?.length === 0 ? (
                            <div>
                                <h2>Your Shopping Basket is empty!!!</h2>
                                <p>
                                    You have no items in your basket.To buy one or more items, click
                                    "Add to basket" next to the item.
                                </p>
                            </div>
                        ) : (
                                <div>
                                    <h2 className="checkout__title">Your Shopping Basket</h2>
                                    {basket.map(item => (
                                        <CheckoutProduct
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                        />
                                    ))}

                                </div>
                            )
                    }



                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />

            </div>

        </div>
    )
}

export default Checkout
