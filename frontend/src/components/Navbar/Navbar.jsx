import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Моя Колекція</Link>
        </li>
        <li>
          <Link to="/wishlist">Список побажань</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
