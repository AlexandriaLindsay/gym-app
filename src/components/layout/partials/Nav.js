import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {scroll} from '../../../assets/js/Functions'

const Nav = ({
  className,
  ID,
  ...props
}) => {

  const classes = classNames(
    'nav-main',
    className
  );

  

  return (
    <>
      <nav
        {...props}
        className={classes}
        id={ID}
        role='navigation'
      >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href='/#membership' onClick={() => scroll('membership')}>Membership Plans</a></li>
            <li><a href='/#sessions' onClick={() => scroll('sessions')}>Sessions</a></li>
            <li><Link to='/contact'>Contact</Link></li>
           
        </ul>
      </nav>
    </>
  );
}


export default Nav;