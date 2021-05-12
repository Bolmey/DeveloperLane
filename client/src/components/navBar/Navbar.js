import React from 'react';
import './navbar.css';
import { Route, Switch, Link } from 'react-router-dom';
import Bundles from '../bundles/Bundles';
import Chairs from '../chairs/Chair';
import Computers from '../computers/Computer';

import Monitor from '../monitor/Monitor';
import Peripherals from '../peripherals/Peripherals';

function Navbar(props) {
    return (
        <div>
            <nav id="navbar" class="navigation" role="navigation">
                <div className="logoNav">Logoo</div>
                <div className="textContainer">
                    <input id="toggle1" type="checkbox" />
                    <label class="hamburger1" for="toggle1">
                        <div class="top"></div>
                        <div class="meat"></div>
                        <div class="bottom"></div>
                    </label>



                    <nav class="menu1">
                        <a class="link1" ><Link to="/bundles"> Bundles </Link></a>
                        <a class="link1" ><Link to="/computers"> Computers </Link></a>
                        <a class="link1" ><Link to="/monitors"> Monitors </Link></a>
                        <a class="link1" ><Link to="/peripherals"> Peripherals </Link></a>
                        <a class="link1" ><Link to="/chairs"> Chairs </Link></a>
                    </nav>

                    <nav class="desktopMenu1">
                        <div className="desktopLogoNav"><Link to="/"> Logoo </Link></div>
                        <a class="link1" ><Link to="/bundles"> Bundles </Link></a>
                        <a class="link1" ><Link to="/computers"> Computers </Link></a>
                        <a class="link1" ><Link to="/monitors"> Monitors </Link></a>
                        <a class="link1" > <Link to="/peripherals"> Peripherals </Link></a>
                        <a class="link1" > <Link to="/chairs"> Chairs </Link></a>
                    </nav>
                </div>
            </nav>
        </div >

    );
}

export default Navbar;