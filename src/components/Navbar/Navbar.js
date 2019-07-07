import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Navbar.scss";
import logo from './images/logo.png';

class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
            <nav className="navbar">
            <img src={logo} alt="city tours logo" />
            <ul className="nav-links">
               <li>
                <a href='/' className="nav-link">
                    home
                </a>
               </li>

               <li>
                <a href='/' className="nav-link">
                    about
                </a>
               </li>

               <li>
                <a href='/' className="nav-link active">
                    tours
                </a>
               </li>

            </ul>
            </nav>

            </div>
        );
    }
}



export default Navbar;