import React from 'react';
import classNames from 'classnames';
import Logo from '../elements/Image';
import SiteLogo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import NavBar from './Nav';

const Header = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'site-header',
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
        <NavBar/>
      </header>
    </>
  );
}


export default Header;