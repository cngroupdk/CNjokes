import React from 'react';
import './App.css';
import { SpecialJokeContainer } from './organisms/SpecialJokeContainer';
import { SearchBlock } from './components/SearchBlock';
import CategoryBlock from './components/CategoryBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">CN jokes 2019</header>
      <SpecialJokeContainer />
      <CategoryBlock />
      <hr />
      <SearchBlock />
      <hr />
      <footer>CN University 2019 team React</footer>
    </div>
  );
}

export default App;
