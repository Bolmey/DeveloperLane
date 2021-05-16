import React from 'react';
import actions from '../../api'
import './monitor.css'


function Monitor(props) {
    return (
        <div className="mainContainer-monitor">
            <div className="firstContainer">
                <div className="heading"></div>
                <div className="productImg">
                    <div className="img"></div>
                </div>
                <div className="textContainer">
                    <div className="leftText">
                        <h1 className="productName">Product Name</h1>
                        <p>Combining the latest optical technology and Razer’s analog mechanical key switches, the Razer Huntsman v2 Analog is good enough to get a five-star rating from us. That’s under-selling it.</p>

                    </div>
                    <div className="buttonPriceContainer">
                        <div className='raiting'>5 Star</div>
                        <div className='buttonPrice'>
                            <h2>$99.99</h2>
                            <button className="button" type="button">Add to Cart</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Monitor;