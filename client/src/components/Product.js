import React, { useState, useEffect } from 'react';
import actions from '../api.js';
import './Product.css';

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
    console.log(path, 'path');
    switch (path) {
      case '/computers':
        responseMain = await actions.getMainPC();
        responseOther = await actions.getOtherPCs();
        console.log('testtttt:', responseMain, responseOther);
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
        console.log('chairs:', responseMain, responseOther);

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
  }, [match]);

  //get list of products from user
  // useEffect(() => {
  //   actions.getUser().then(res => console.log(res))
  //    .then(console.log(userProducts))

  // }, [])

  function handleAddToCart(product) {
    actions.userPost(product).then((res) => console.log(res));
    //.then((res) => setUserProducts([...userProducts, res.data]))
  }

  console.log('mainProduct:', mainProduct);

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
    <div className='body-container'>
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
              <h2>${mainProduct?.price}</h2>
              <button
                onSubmit={handleAddToCart(mainProduct)}
                className='save-main-button'
                type='button'>
                Add to Cart
              </button>
              <a
                href='https://www.amazon.com/HP-M27ha-FHD-Monitor-Built/dp/B08DJB7VVY/ref=sxin_5_ac_d_mf_rf?ac_md=1-0-MjYgdG8gMjkuOSBJbmNoZXM%3D-ac_d_rf&amp;cv_ct_cx=computer+monitor&amp;dchild=1&amp;keywords=computer+monitor&amp;pd_rd_i=B08DJB7VVY&amp;pd_rd_r=c63134db-e168-4b2c-8cfc-18d88729f249&amp;pd_rd_w=5y7xH&amp;pd_rd_wg=O4Oyb&amp;pf_rd_p=89fa575a-c44e-401e-be03-82c92ec5e029&amp;pf_rd_r=P124AS5QBSTZRWZHQ6RE&amp;psc=1&amp;qid=1621545600&amp;sr=1-1-89f8c401-73d8-4caf-b340-e9b34f2a8bae?_encoding=UTF8&amp;camp=1789&amp;creative=9325&amp;linkCode=ur2&amp;tag=storypodca-20&amp;linkId=2P4S6EY6B462X4AR'
                target='_blank'
                rel='noopener noreferrer'
                style={{ border: 'none', textDecoration: 'none' }}>
                <img src='https://www.niftybuttons.com/amazon/amazon-button2.png' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='productContainer'>{displayOtherProducts()}</div>
    </div>
  );
};

export default Product;
