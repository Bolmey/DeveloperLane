import React from 'react';
import './home.css'

function Home(props) {
    return (
        <div className="mainContainer">
            <div className="container1">
                <div className="textButtonContainer">
                    <div className="container1Text">
                        <p>Bundles to Optimize<br /> Your Battle Station</p>
                    </div>
                    <div className="buttonContainer1">
                        <button className="container1Button">See More</button>
                        <button className="container1Button">See More</button>
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
                        <button className="container2Button">See More</button>
                        <button className="container2Button">See More</button>
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
                        <button className="container3Button">See More</button>
                        <button className="container3Button">See More</button>
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
                        <button className="container4Button">See More</button>
                        <button className="container4Button">See More</button>
                        <div className='downArrow'>\/</div>
                    </div>
                </div>
            </div>
            <div className="container5">
                <div className="textButtonContainer">
                    <div className="container5Text">
                        <p>Chairs</p>
                    </div>
                    <div className="buttonContainer6">
                        <button className="container7Button">See More</button>
                        <button className="container7Button">See More</button>
                        <div className='downArrow'>\/</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;