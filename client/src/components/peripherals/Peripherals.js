import { useState, useEffect } from "react";
import axios from "axios";
import './peripherals.css'

const imgsrc = 'https://media.wired.com/photos/5f862593a50a226585bee266/16:9/w_2399,h_1349,c_limit/Gear-Keyboard-452883322.jpg'

function Peripherals(props) {

    // useEffect(() => {
    //     axios.get('http://localhost:5000/getPeripherals')
    //         .then((res) => {
    //             console.log(res.data);
    //             //setMessages(res.data);
    //         })
    // }, []);



    return (
        <div className="peri-container">

            <div>Peripherials Page</div>


            <div className="mainProduct-container">
                <img className="mainProduct-image" src={imgsrc} />
                <div className="mainProduct-details">
                    <div className="mainProduct-nameSpecs">
                        <h2>Product.name</h2>
                        <li>product.specs1</li>
                        <li>product.specs2</li>
                        <li>product.specs3</li>
                    </div>
                    <div className="mainPriceAndButton">
                        <h6>999.99$</h6>
                        <button className="mainBuyButton">Buy</button>
                    </div>
                </div>
            </div>


            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div className="product-nameSpecs">
                            <h2>Product.name</h2>
                            <li>product.specs1</li>
                            <li>product.specs2</li>
                            <li>product.specs3</li>
                        </div>
                        <div className="priceAndButton">
                            <h6>50.99$</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div className="product-nameSpecs">
                            <h2>Product.name</h2>
                            <li>product.specs1</li>
                            <li>product.specs2</li>
                            <li>product.specs3</li>
                        </div>
                        <div className="priceAndButton">
                            <h6>50.99$</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div className="product-nameSpecs">
                            <h2>Product.name</h2>
                            <li>product.specs1</li>
                            <li>product.specs2</li>
                            <li>product.specs3</li>
                        </div>
                        <div className="priceAndButton">
                            <h6>50.99$</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div className="product-nameSpecs">
                            <h2>Product.name</h2>
                            <li>product.specs1</li>
                            <li>product.specs2</li>
                            <li>product.specs3</li>
                        </div>
                        <div className="priceAndButton">
                            <h6>50.99$</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
}

export default Peripherals;