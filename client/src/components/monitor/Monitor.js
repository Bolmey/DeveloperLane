import React, { useState, useEffect } from 'react';
import actions from '../../api'
import './monitor.css'



function Monitor(props) {

    const [mainProduct, setMainProduct] = useState([])
    const [otherProducts, setOtherProducts] = useState([])

    useEffect(() => {
        actions.getMainMonitor()
            .then(async (res) => await setMainProduct(res[0]))
        actions.getOtherMonitors()
            .then(async (res) => await setOtherProducts(res))
    }, [])





    function displayOtherProducts() {
        return (
            otherProducts.map((product) => {
                return (
                    <div className="product-container">
                        <div className="heading"></div>
                        <div className="product-img">
                            <img src={product.image} />
                        </div>
                        <div className="details-container">
                            <div className="text-container">
                                <h1 className="product-name">{product.name}</h1>
                                <p>{product.description}</p>

                            </div>
                            <div className="button-price-container">
                                <div className='rating'>{product.rating}</div>
                                <div className='button-price'>
                                    <h2>${product.price}</h2>
                                    <button className="button" type="button">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }))
    }



    return (
        <div className="body-container">

            <div className="main-product-container">
                <div className="heading"></div>
                <div className="main-product-img">
                    <img src={mainProduct.image} />
                </div>
                <div className="main-details-container">
                    <div className="main-text-container">
                        <h1 className="main-product-name">{mainProduct.name}</h1>
                        <p>{mainProduct.description}</p>

                    </div>
                    <div className="main-button-price-container">
                        <div className='main-rating'>{mainProduct.rating}</div>
                        <div className='main-button-price'>
                            <h2>${mainProduct.price}</h2>
                            <button className="main-button" type="button">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productContainer">
                {/* {displayOtherProducts()} */}
            </div>

        </div>
    )
}

export default Monitor;