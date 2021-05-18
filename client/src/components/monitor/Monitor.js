import React, { useState, useEffect } from 'react';
import actions from '../../api'
import './monitor.css'



function Monitor(props) {

    const [mainProduct, setMainProduct] = useState([])
    const [otherProducts, setOtherProducts] = useState([])

    let other = [
        {
            name: "Samsung LC49G95TSSNXZA",
            image: "https://robbreport.com/wp-content/uploads/2020/01/g901.jpg?w=1000",
            description
                :
                "Get your head in the game with the 49 inch Odyssey G9, which matches t...",
            price
                :
                1399.99,
            rating
                :
                "4.7",
            best
                :
                false
        },
        {
            name
                :
                "ViewSonic Elite XG270QG",
            image
                :
                "https://www.techtoyreviews.com/wp-content/uploads/2020/06/ViewSonic-mo...",
            description
                :
                "The ViewSonic Elite XG270QG is a good monitor for most uses. It perfor...",
            price
                :
                559.99,
            rating
                :
                "4.5",
            best
                :
                false
        }
    ]

    useEffect(() => {
        actions.getMainMonitor()
            .then(async (res) => await setMainProduct(res[0]))
        actions.getOtherMonitors()
            .then(async (res) => {
                await setOtherProducts(res)
                setOtherProducts(other)
            })
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
                            </div>ç
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
                    <div className="main-picture" style={{ backgroundImage: `url(${mainProduct.image})`, backgroundPosition: `center`, backgroundSize: '100%' }}>

                    </div>
                    {/* <img src={mainProduct.image} /> */}
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
                {displayOtherProducts()}
            </div>

        </div >
    )
}

export default Monitor;