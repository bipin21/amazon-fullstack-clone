import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="banner.png" />

                <div className="home__row">
                    <Product
                        id={1}
                        title="Microsoft Surface Laptop"
                        price={980}
                        rating={5}
                        image="product2.jpg"
                    />
                    <Product
                        id={1}
                        title="Oppo F11"
                        price={350}
                        rating={3}
                        image="product3.jpeg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={1}
                        title="BAS Cricket Bat"
                        price={320}
                        rating={4}
                        image="product5.jpg"
                    />
                    <Product
                        id={1}
                        title="Icon Cricket Bat"
                        price={250}
                        rating={4}
                        image="iconbat.jpeg"
                    />
                    <Product
                        id={1}
                        title="SG Cricket bat"
                        price={170}
                        rating={4}
                        image="product4.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={1}
                        title="LED Screen max"
                        price={500}
                        rating={5}
                        image="ledscreen.jpeg"
                    />
                </div>
            </div>


        </div>
    )
}

export default Home
