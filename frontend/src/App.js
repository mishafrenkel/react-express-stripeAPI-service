import React from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <p>
        <Checkout
          name={'Donation'}
          description={'Only the Book'}
          amount={1}
        />
      </p>
    </div>
  );
}

export default App;
