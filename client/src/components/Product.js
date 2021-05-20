import React, { useState, useEffect } from 'react';
import actions from '../api.js';
import './Product.css';

const Product = ({ match }) => {
  const [mainProduct, setMainProduct] = useState({});
  const [otherProducts, setOtherProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);


  let temp = match.path.slice(1, match.path.length);
  let pageHeader = temp.charAt(0).toUpperCase() + temp.slice(1);


  async function getProducts() {
    let path = match.path;
    let responseMain;
    let responseOther;
    console.log(path, 'path');
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
      case '/cart':
        await actions.getUser()
          .then(res => setOtherProducts(res.data[0].products))
        break;
    }
  }

  useEffect(() => {
    getProducts();
  }, [match]);



  function handleAddToCart(product) {
    actions.userPost(product)
      .then((res) => setUserProducts(res.data.products))
  }


  function displayMainProduct() {
    return (
      <div className='main-product-container'>
        <div className='main-heading'>
          <h1>{pageHeader}</h1>
        </div>
        <div className='main-product-img'>
          <div
            className='main-picture'
            style={{
              backgroundImage: `url(${mainProduct?.image})`,
              backgroundPosition: `center`,
              backgroundSize: '100%'
            }}></div>
          {/* <img src={mainProduct.image} /> */}
        </div>
        <div className='main-details-container'>
          <div className='main-text-container'>
            <h1 className='main-product-name'>{mainProduct?.name}</h1>
            <p>{mainProduct?.description}</p>
          </div>
          <div className='main-button-price-container'>
            {/* <i class='fas fa-star'></i> */}
            <div className='main-rating'>{mainProduct?.rating}</div>
            <div className='main-button-price'>
              <h2>${mainProduct.price}</h2>
              <button onClick={() => handleAddToCart(mainProduct)} className='main-button' type='button'>
                Add to Cart
            </button>
            </div>
          </div>
        </div>
      </div>
    )
  }


  function displayOtherProducts() {
    return otherProducts.map((product) => {
      return (
        <div className='other-product-container'>
          <div className='heading'></div>
          <div className='other-product-img'>
            <div
              className='other-picture'
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundPosition: `center`,
                backgroundSize: '100%'
              }}></div>{' '}
          </div>
          <div className='other-details-container'>
            <div className='other-text-container'>
              <h1 className='product-name'>{product.name}</h1>
              <p>{product.description}</p>
            </div>
            <div className='other-button-price-container'>
              <div className='rating'>{product.rating}</div>
              <div className='button-price'>
                <h2>${product.price}</h2>
                {match.path !== '/cart' && <button onClick={() => handleAddToCart(product)} className='button' type='button'>
                  Add to Cart
                </button>}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className='body-container'>

      {match.path !== '/cart' && displayMainProduct()}
      <div className='productContainer'>{displayOtherProducts()}</div>
    </div>
  );
};

export default Product;
