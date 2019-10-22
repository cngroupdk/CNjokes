import React from 'react';
import './App.css';
import SpecialJokeBlock from './components/SpecialJokeBlock';
import SearchBlock from './components/SearchBlock';
import CategoryBlock from './components/CategoryBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Here we are.
      </header>
      <SpecialJokeBlock />
      <hr />
      <CategoryBlock />
      <hr />
      <h2>Still not satisfied?</h2>
      <SearchBlock />
    </div>
  );
}

export default App;
