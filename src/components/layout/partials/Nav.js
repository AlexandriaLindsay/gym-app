import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {removeClass, scroll} from '../../../assets/js/Functions'

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
            <li><Link className="hover-2" to="/" onClick={() => removeClass()}>Home</Link></li>
            <li><a className="hover-2" href='/#membership' onClick={() => scroll('membership')}>Membership Plans</a></li>
            <li><a className="hover-2" href='/#sessions' onClick={() => scroll('sessions')}>Sessions</a></li>
            <li><Link className="hover-2" to='/contact' onClick={() => removeClass()}>Contact</Link></li>
           
        </ul>
      </nav>
    </>
  );
}


export default Nav;