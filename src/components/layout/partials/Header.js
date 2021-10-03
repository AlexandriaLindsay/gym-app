import React from 'react';
import classNames from 'classnames';
import Logo from '../../elements/Image';
import SiteLogo from '../../../assets/images/spartan-logo.svg';
import { Link } from 'react-router-dom';
import NavBar from './Nav';
import 'animate.css';

const Header = ({
  className,
  ID,
  ...props
}) => {

  const classes = classNames(
    'header',
    'width-1700',
    'animate__animated animate__fadeInDown',
    'animate__delay-1s',
    className
  );

  return (
    <>
      <header
        {...props}
        className={classes}
        id={ID}
      >
        <Link className='site-logo hero-content' to='/'>
          <Logo src={SiteLogo} /> 
        </Link>
        <NavBar ID='site-navigation' />
      </header>
    </>
  );
}


export default Header;