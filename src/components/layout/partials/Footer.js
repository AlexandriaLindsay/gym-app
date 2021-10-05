import React, { useState } from "react";
import Image from '../../elements/Image';
import Logo from '../../../assets/images/spartan-logo-white.svg';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { scroll } from '../../../assets/js/Functions';


const Footer = ({
    ID,
    ...props
    
}) => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        const overlay = document.querySelector('.overlay');
        const main = document.querySelector('main');
        overlay.classList.toggle("open");
        main.classList.toggle("opacity");
        setActive(!isActive);
    };

    return(
        <>
            <footer
                {...props}
                id='footer'
            >
                <div className="width-1500">
                    <Link to="/">
                        <Image style={{ width: '191px' }} src={Logo} alt="Spartan Gym &amp; Training Centre Logo" />
                    </Link>
                    <Nav />
                </div>
            </footer>
            <div className={isActive ? 'button_container active' : 'button_container'} onClick={toggleClass}>
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </div>
            <button id="return-to-top" onClick={() => scroll('main-header')}><i className="glyphicon glyphicon-chevron-up" aria-hidden="true"></i></button>
        </>
    );
}

export default Footer;