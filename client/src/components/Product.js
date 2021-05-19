import React, { useState, useEffect } from 'react';
import actions from '../api.js';
// import './Product.css';

const Product = ({ match }) => {
  const [mainProduct, setMainProduct] = useState({});
  const [otherProducts, setOtherProducts] = useState([]);
  let temp = match.path.slice(1, match.path.length);
  let pageHeader = temp.charAt(0).toUpperCase() + temp.slice(1);

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

  //get list of products from user
  // useEffect(() => {
  //   actions.getUser().then(res => console.log(res))
  //    .then(console.log(userProducts))

  // }, [])

  function handleAddToCart(product) {
    actions.userPost(product).then((res) => console.log(res));
    //.then((res) => setUserProducts([...userProducts, res.data]))
  }

  function displayOtherProducts() {
    return otherProducts.map((product) => {
      return (
        <div className='other-product-container' key={product._id}>
          <div className='heading'></div>
          <div className='other-product-img'>
            <img src={product.image} />
          </div>
          <div className='other-details-container'>
            <div className='text-container'>
              <h1 className='product-name'>{product.name}</h1>
              <p>{product.description}</p>
            </div>
            <div className='other-button-price-container'>
              <div className='rating'>{product.rating}</div>
              <div className='button-price'>
                <h2>${product.price}</h2>
                <button
                  onSubmit={handleAddToCart(product)}
                  className='button'
                  type='button'>
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
    <div className='product-page-body'>
      <div className='header-container'>
        <h1>{pageHeader}</h1>
      </div>
      <div className='main-product-container'>
        <div
          className='main-picture'
          style={{
            backgroundImage: `url(${mainProduct.image})`,
            backgroundPosition: `center`,
            backgroundSize: '100%'
          }}>
          <div className='best-tag'>Best All-Around</div>
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
              <button
                onSubmit={handleAddToCart(mainProduct)}
                className='main-button'
                type='button'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='productContainer'>{displayOtherProducts()}</div> */}
    </div>
  );
};

export default Product;
