import React, { useState, useEffect } from 'react';
import actions from '../../api'
import './monitor.css'



function Monitor(props) {

    const [mainProduct, setMainProduct] = useState([])
    const [otherProducts, setOtherProducts] = useState([])

    useEffect(() => {
        actions.getMainMonitor()
            .then(async (res) => await setMainProduct(res))
        actions.getOtherMonitors()
            .then(async (res) => await setOtherProducts(res))

    }, [])





    function displayOtherProducts() {
        console.log(otherProducts)
        return (
            otherProducts.map((product) => {
                return (
                    <div className="mainContainer-monitor">
                        <div className="firstContainer">
                            <div className="heading"></div>
                            <div className="productImg">
                                <img src={product.image} />
                            </div>
                            <div className="textContainer">
                                <div className="leftText">
                                    <h1 className="productName">{product.name}</h1>
                                    <p>{product.description}</p>

                                </div>
                                <div className="buttonPriceContainer">
                                    <div className='raiting'>{product.rating}</div>
                                    <div className='buttonPrice'>
                                        <h2>${product.price}</h2>
                                        <button className="button" type="button">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }







    return (
        <div>

            <div className="mainContainer-monitor">
                <div className="firstContainer">
                    <div className="heading"></div>
                    <div className="productImg">
                        <img src={mainProduct.image} />
                    </div>
                    <div className="textContainer">
                        <div className="leftText">
                            <h1 className="productName">{mainProduct.name}</h1>
                            <p>{mainProduct.description}</p>

                        </div>
                        <div className="buttonPriceContainer">
                            <div className='raiting'>{mainProduct.rating}</div>
                            <div className='buttonPrice'>
                                <h2>${mainProduct.price}</h2>
                                <button className="button" type="button">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productContainer">
                {displayOtherProducts()}
            </div>

        </div>
    );
}

export default Monitor;