import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import Wishlist from './components/Wishlist/Wishlist';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='content-page'>
        <Routes>
          <Route path="/my_collection" element={<ItemList />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
