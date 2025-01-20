import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import Wishlist from './components/Wishlist/Wishlist';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/my_collection" element={<ItemList />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
};

export default App;
