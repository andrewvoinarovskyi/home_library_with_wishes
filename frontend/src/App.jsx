import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemList from './components/ItemList/ItemList';
import Wishlist from './components/Wishlist/Wishlist';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
};

export default App;
