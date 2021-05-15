import { useState, useEffect } from "react";
import './peripherals.css'
import actions from '../../api'


function Peripherals(props) {

    const [mainProduct, setMainProduct] = useState([])
    const [otherProducts, setOtherProducts] = useState([])




    // .then((res) => setProducts(res.map((product) => product)))
    //.then(() => console.log(products))

    useEffect(() => {
        actions.getMainKeyboard()
            .then((res) => setMainProduct(res[0]))

        actions.getOtherKeyboards()
            .then((res) => setOtherProducts(res))



    }, []);





    //console.log(otherProducts[0].name);


    function displayOtherProducts() {
        return (
            otherProducts.map((product, i) => {
                return (

                    <div className="product-container">
                        <img className="product-image" src={otherProducts[i].image} />
                        <div className="product-details">
                            <div className="product-nameSpecs">
                                <h2>{otherProducts[i].name}</h2>
                                <h5>{otherProducts[i].rating}</h5>
                                <p>{otherProducts[i].description}</p>
                            </div>
                            <div className="priceAndButton">
                                <h6>${otherProducts[i].price}</h6>
                                <button className="buyButton">Add To Cart</button>
                            </div>
                        </div>
                    </div>

                )
            })
        )
    }


    return (
        <div className="peri-container">

            <div>Peripherials Page</div>


            <div className="mainProduct-container">
                <img className="mainProduct-image" src={mainProduct.image} />
                <div className="mainProduct-details">
                    <div className="mainProduct-nameSpecs">
                        <h2>{mainProduct.name}</h2>
                        <h4>{mainProduct.rating}</h4>
                        <p>{mainProduct.description}</p>
                    </div>
                    <div className="mainPriceAndButton">
                        <h6>${mainProduct.price}</h6>
                        <button className="mainBuyButton">Add To Cart</button>
                    </div>
                </div>
            </div>

            <div className="container-switch">
                {displayOtherProducts()}
            </div>
        </div>
    );
}

export default Peripherals;