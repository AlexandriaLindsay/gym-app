import React from 'react';
import Image from '../../elements/Image';
import Logo from '../../../assets/images/spartan-logo-white.svg';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Home from '../../views/Home';

const Footer = ({
    ID,
    ...props
}) => {
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
        </>
    );
}

export default Footer;