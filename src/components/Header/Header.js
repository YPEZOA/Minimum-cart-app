import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import avatar from '../../images/image-avatar.png';
import iconCart from '../../images/icon-cart.svg';

import './Header.scss';

const Header = ({ totalCountsForBadge }) => (
  <nav className="navbar navbar-expand">
    <a href="#!" className="navbar-brand">
      <img src={logo} alt="" />
    </a>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a href="#!">Collections</a>
      </li>
      <li className="nav-item">
        <a href="#!">Men</a>
      </li>
      <li className="nav-item">
        <a href="#!">Women</a>
      </li>
      <li className="nav-item">
        <a href="#!">About</a>
      </li>
      <li className="nav-item">
        <a href="#!">Contact</a>
      </li>
    </ul>
    <div className="contain-data">
      <span className="badge">{totalCountsForBadge}</span>
      <img src={iconCart} alt="icon" />
      <img src={avatar} alt="avatar" className="avatar-image" />
    </div>
  </nav>
);
export default Header;

Header.displayName = 'Header';

Header.propTypes = {
  totalCountsForBadge: PropTypes.number.isRequired,
};
