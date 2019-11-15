import React from 'react';
import Search from './containers/Search'
import Books from './containers/Books'
import Pagination from "./containers/Pagination";

import './home.css'


const Home = () => (
  <div id="home" className="page">
    <div className="container">
      <Search />

      <Books />
      <Pagination />
    </div>
  </div>
);
export default Home;