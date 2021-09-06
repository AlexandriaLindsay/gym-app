import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Nav = ({
  className,
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
      >
        <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to={About}>About</Link></li>
            <li><Link to={Services}>Home</Link></li>
            <li><Link to={Contact}>Contact</Link></li> */}
        </ul>
      </nav>
    </>
  );
}


export default Nav;