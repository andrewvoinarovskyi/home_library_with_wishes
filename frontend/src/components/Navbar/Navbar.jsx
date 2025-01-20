import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/my_collection">Моя колекція</Link>
      </li>
      <li>
        <Link to="/wishlist">Список побажань</Link>
      </li>
    </ul>
  );
};

export default Navbar;
