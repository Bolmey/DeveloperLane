import React from 'react';
import './home.css'
import actions from '../../api'

function Home(props) {



    return (
        <div className="mainContainer">
            <div className="container1">
                <div className="textButtonContainer">
                    <div className="container1Text">
                        <p>Bundles to Optimize!<br /> Your Battle Station</p>
                    </div>
                    <div className="buttonContainer1">
                        <button className="container1Button">See Bundles</button>
                        <button className="container1Button">See SOmething</button>
                        <div className='downArrow'>\/</div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="textButtonContainer">
                    <div className="container2Text">
                        <p>Computers</p>
                    </div>
                    <div className="buttonContainer2">
                        <button className="container2Button">See PC</button>
                        <button className="container2Button">See Mac</button>
                        <div className='downArrow'>\/</div>
                    </div>
                </div>
            </div>
            <div className="container3">
                <div className="textButtonContainer">
                    <div className="container3Text">
                        <p>Monitors</p>
                    </div>
                    <div className="buttonContainer3">
                        <button className="container3Button">See Monitors</button>
                        <button className="container3Button">See Something</button>
                        <div className='downArrow'>\/</div>
                    </div>
                </div>
            </div>
            <div className="container4">
                <div className="textButtonContainer">
                    <div className="container4Text">
                        <p>Peripherals</p>
                    </div>
                    <div className="buttonContainer4">
                        <button className="container4Button">See Keyboards</button>
                        <button className="container4Button">See Mice</button>
                        <div className='downArrow'>\/</div>
                    </div>
                </div>
            </div>
            <div className="container5">
                <div className="textButtonContainer">
                    <div className="container5Text">
                        <p>Chairs</p>
                    </div>
                    <div className="buttonContainer5">
                        <button className="container5Button">See Chairs</button>
                        <button className="container5Button">See Something</button>
                        <div className='downArrow'>\/</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;