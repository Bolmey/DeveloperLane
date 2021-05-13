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


            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div>
                            <h2>Product.name</h2>
                            <p>product.Details text text texttext text texttext text texttext text texttext text text</p>
                        </div>
                        <div className="priceAndButton">
                            <h6>product.price$</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div>
                            <h2>Product.name</h2>
                            <p>product.Details text text texttext text texttext text texttext text texttext text text</p>
                        </div>
                        <div className="priceAndButton">
                            <h6>product.price</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>
            </div>





            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div>
                            <h2>Product.name</h2>
                            <p>product.Details text text texttext text texttext text texttext text texttext text text</p>
                        </div>
                        <div className="priceAndButton">
                            <h6>product.price</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div>
                            <h2>Product.name</h2>
                            <p>product.Details text text texttext text texttext text texttext text texttext text text</p>
                        </div>
                        <div className="priceAndButton">
                            <h6>product.price</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div>
                            <h2>Product.name</h2>
                            <p>product.Details text text texttext text texttext text texttext text texttext text text</p>
                        </div>
                        <div className="priceAndButton">
                            <h6>product.price</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div className="product-details">
                        <div>
                            <h2>Product.name</h2>
                            <p>product.Details text text texttext text texttext text texttext text texttext text text</p>
                        </div>
                        <div className="priceAndButton">
                            <h6>product.price</h6>
                            <button className="buyButton">Buy</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Peripherals;