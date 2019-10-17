import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpecialJoke from './components/SpecialJoke';
import CategoriesList from './components/CategoriesList';
import SatisfactionSearch from './components/SatisfactionSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Here we are.
      </header>
      <SpecialJoke />
      <hr />
      <h2>Or choose from categories</h2>
      <CategoriesList />
      <hr />
      <h2>Still not satisfied?</h2>
      <SatisfactionSearch />
    </div>
  );
}

export default App;
