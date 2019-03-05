import React, { Component } from 'react';
import nhlogo from './nhlogo.png'

class NavBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-custom">
                <span className="navbar-brand mb-0 h1 navbar-custom">
                    <a href="/">
                        <img src={nhlogo} height='40px' alt="Novel History"/>
                    </a>
                </span>
            </nav>
        )
    }

}

export default NavBar;