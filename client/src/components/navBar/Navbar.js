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
                <input id="toggle1" type="checkbox" />
                <label class="hamburger1" for="toggle1">
                    <div class="top"></div>
                    <div class="meat"></div>
                    <div class="bottom"></div>
                </label>

                <nav class="menu1">
                    <a class="link1" >Bundles</a>
                    <a class="link1" >Computers</a>
                    <a class="link1" >Monitors</a>
                    <a class="link1" >Peripherals</a>
                    <a class="link1" >Chairs</a>
                </nav>
            </nav>
        </div >

    );
}

export default Navbar;