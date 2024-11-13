// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light ">
      <Link className="navbar-brand" to="/">E-Commerce</Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart ({cart.length})
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
