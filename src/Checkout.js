import React, { forwardRef } from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';
import Article from './Article';

function Checkout() {
    const [{ basket, user, articles }, dispatch] = useStateValue();
    const customEnterAnimation = {
        from: { transform: 'scale(0.5, 1)' },
        to: { transform: 'scale(1, 1)' }
    };

    const customLeaveAnimation = {
        from: { transform: 'scale(1, 1)' },
        to: { transform: 'scale(0.5, 1) translateY(-20px)'}
    };


    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="top.jpg" />
                <div>
                    {
                        basket?.length === 0 ? (
                            <div>
                                <h3>Hello, {user?.email}</h3>
                                <h2>Your Shopping Basket is empty!!!</h2>
                                <p>
                                    You have no items in your basket.To buy one or more items, click
                                    "Add to basket" next to the item.
                                </p>
                            </div>
                        ) : (
                                <div>
                                    <h3>Hello, {user?.email}</h3>
                                    <h2 className="checkout__title">Your Shopping Basket</h2>
                                    <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)" enterAnimation={customEnterAnimation} leaveAnimation={customLeaveAnimation} typeName={null}>
                                        {basket.map(item => (

                                            <CheckoutProduct
                                                key={item.id}
                                                title={item.title}
                                                image={item.image}
                                                price={item.price}
                                                rating={item.rating}
                                                id={item.id}
                                            ></CheckoutProduct>
                                        ))}
                                    </FlipMove>


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
