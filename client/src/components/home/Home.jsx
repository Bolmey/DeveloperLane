import React from 'react';
import './home.css'
import actions from '../../api'
import { Link } from 'react-router-dom'


function Home(props) {



    return (
        <div className="mainContainer">
            <div className="container2">
                <div className="textButtonContainer">
                    <div className="container2Text">
                        <p>Computers</p>
                    </div>
                    <div className="buttonContainer2">
                        <Link to='/computers'> <button className="container2Button">See Computers</button> </Link>
                    </div>
                </div>
            </div>
            <div className="container3">
                <div className="textButtonContainer">
                    <div className="container3Text">
                        <p>Monitors</p>
                    </div>
                    <div className="buttonContainer3">
                        <Link to='/monitors'> <button className="container3Button">See Monitors</button> </Link>
                    </div>
                </div>
            </div>
            <div className="container4">
                <div className="textButtonContainer">
                    <div className="container4Text">
                        <p>Peripherals</p>
                    </div>
                    <div className="buttonContainer4">
                        <Link to='/keyboards'> <button className="container4Button">See Keyboards</button> </Link>
                        <Link to='/mouse'> <button className="container4Button">See Mice</button> </Link>
                    </div>
                </div>
            </div>
            <div className="container5">
                <div className="textButtonContainer">
                    <div className="container5Text">
                        <p>Chairs</p>
                    </div>
                    <div className="buttonContainer5">
                        <Link to='/chairs'> <button className="container5Button">See Chairs</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;