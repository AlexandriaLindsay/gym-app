import React from 'react';
import Image from '../../elements/Image';
import footerImg from '../../../assets/images/kick-boxer.jpg';
import Logo from '../../../assets/images/spartan-logo-white.svg';

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
                <Image style={{ width: '191px' }} src={Logo} alt="Spartan Gym &amp; Training Centre Logo" />
                <Image src={footerImg} alt="kickboxer" />
            </footer>
        </>
    );
}

export default Footer;