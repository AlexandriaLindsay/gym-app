import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'


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
            <li><AnchorLink href='#membership'>Membership Plans</AnchorLink></li>
            <li><Link to='/#sessions'>Sessions</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}


export default Nav;