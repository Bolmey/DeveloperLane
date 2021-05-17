import React, { useState, useEffect } from 'react';
import actions from '../../api'
import './monitor.css'



function Monitor(props) {

    const [mainProduct, setMainProduct] = useState([])
    const [otherProducts, setOtherProducts] = useState([])

    useEffect(() => {
        actions.getMainMonitor()
        .then(async (res) =>  await setMainProduct(res))
        actions.getOtherMonitors()
        .then(async(res) => await setOtherProducts(res))

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
                                <img src={product.image}/>
                            </div>
                            <div className="textContainer">
                                <div className="leftText">
                                    <h1 className="productName">{product.name}</h1>
                                    <p>Combining the latest optical technology and Razer’s analog mechanical key switches, the Razer Huntsman v2 Analog is good enough to get a five-star rating from us. That’s under-selling it.</p>
            
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
        )}







    return (
        <div>

        <div className="mainContainer-monitor">
            <div className="firstContainer">
                <div className="heading"></div>
                <div className="productImg">
                    <div className="img"></div>
                </div>
                <div className="textContainer">
                    <div className="leftText">
                        <h1 className="productName">{mainProduct.name}</h1>
                        <p>Combining the latest optical technology and Razer’s analog mechanical key switches, the Razer Huntsman v2 Analog is good enough to get a five-star rating from us. That’s under-selling it.</p>

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

        <div>
            {displayOtherProducts()}
        </div>

        </div>
    );
}

export default Monitor;