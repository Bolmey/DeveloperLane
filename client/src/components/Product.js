import React, { useState, useEffect } from 'react';
import actions from '../api.js';

const Product = ({ match }) => {
  const [mainProduct, setMainProduct] = useState({});
  const [otherProducts, setOtherProducts] = useState([]);

  console.log(match.path);

  async function getProducts() {
    let path = match.path;
    let responseMain;
    let responseOther;
    switch (path) {
      case '/computers':
        responseMain = await actions.getMainPC();
        responseOther = await actions.getOtherPCs();
        setMainProduct(responseMain[0]);
        setOtherProducts(responseOther);
        break;
      case '/mouse':
        responseMain = await actions.getMainMouse();
        responseOther = await actions.getOtherMouse();
        setMainProduct(responseMain[0]);
        setOtherProducts(responseOther);
        break;
      case '/keyboards':
        responseMain = await actions.getMainKeyboard();
        responseOther = await actions.getOtherKeyboards();
        setMainProduct(responseMain[0]);
        setOtherProducts(responseOther);
        break;
      case '/chairs':
        responseMain = await actions.getMainChair();
        responseOther = await actions.getOtherChairs();
        setMainProduct(responseMain[0]);
        setOtherProducts(responseOther);
        break;
      case '/monitors':
        responseMain = await actions.getMainMonitor();
        responseOther = await actions.getOtherMonitors();
        setMainProduct(responseMain[0]);
        setOtherProducts(responseOther);
        break;
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  function displayOtherProducts() {
    return otherProducts.map((product) => {
      return (
        <div className='product-container' key={product._id}>
          <div className='heading'></div>
          <div className='product-img'>
            <img src={product.image} />
          </div>
          <div className='details-container'>
            <div className='text-container'>
              <h1 className='product-name'>{product.name}</h1>
              <p>{product.description}</p>
            </div>
            <div className='button-price-container'>
              <div className='rating'>{product.rating}</div>
              <div className='button-price'>
                <h2>${product.price}</h2>
                <button className='button' type='button'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className='body-container'>
      <div className='main-product-container'>
        <div className='heading'></div>
        <div className='main-product-img'>
          <div
            className='main-picture'
            style={{
              backgroundImage: `url(${mainProduct.image})`,
              backgroundPosition: `center`,
              backgroundSize: '100%'
            }}></div>
          {/* <img src={mainProduct.image} /> */}
        </div>
        <div className='main-details-container'>
          <div className='main-text-container'>
            <h1 className='main-product-name'>{mainProduct.name}</h1>
            <p>{mainProduct.description}</p>
          </div>
          <div className='main-button-price-container'>
            <div className='main-rating'>{mainProduct.rating}</div>
            <div className='main-button-price'>
              <h2>${mainProduct.price}</h2>
              <button className='main-button' type='button'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='productContainer'>{displayOtherProducts()}</div>
    </div>
  );
};

export default Product;
