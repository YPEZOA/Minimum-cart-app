import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <nav className="navbar navbar-expand">
      <a href="#!" className="navbar-brand">
        <img src="" alt="" />
        e-commerce
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#!">Collections</a>
        </li>
        <li className="nav-item">
          <a href="#!">Men</a>
        </li>
        <li className="nav-item">
          <a href="#!">Women</a>
        </li>
        <li className="nav-item">
          <a href="#!">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#!">About</a>
        </li>
      </ul>
      <div className="contain-data">
        <a href="#!">
          <img src="../../assets/images/image-avatar.png" alt="" />
        </a>
        <a href="#!">
          <img src="../../assets/images/icon-cart.svg" alt="" />
        </a>
      </div>
    </nav>
  );
};
export default Header;
Header.displayName = 'Header';
