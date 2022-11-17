import React from 'react';
import Header from './components/header/index';
import Search from './components/search/index';
import Card from './components/card/index';
import './styles/App.css';
// I went for a css reset to remove browser constraints
import './styles/_reset.css';


const App = () => (
  <div className="app">
    <Header />
    <Search />
    <Card />
  </div>
);

export default App;
