import React from 'react';
import './peripherals.css'

const imgsrc = 'https://media.wired.com/photos/5f862593a50a226585bee266/16:9/w_2399,h_1349,c_limit/Gear-Keyboard-452883322.jpg'

function Peripherals(props) {
    return (
        <div className="peri-container">

            <div>Peripherials Page</div>

            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>
            </div>


            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>
            </div>


            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>
            </div>


            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>
            </div>


            <div className="container-switch">
                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>

                <div className="product-container">
                    <img className="product-image" src={imgsrc} />
                    <div>test</div>
                </div>
            </div>


        </div>
    );
}

export default Peripherals;