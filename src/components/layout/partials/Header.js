import React from 'react';
import classNames from 'classnames';
import Logo from '../../elements/Image';
import SiteLogo from '../../../assets/images/spartan-logo.svg';
import { Link } from 'react-router-dom';
import NavBar from './Nav';

const Header = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'header',
    'width-1700',
    className
  );

  return (
    <>
      <header
        {...props}
        className={classes}
      >
        <Link className='site-logo' to='/'>
          <Logo src={SiteLogo} /> 
        </Link>
        <NavBar ID='site-navigation' />
      </header>
    </>
  );
}


export default Header;