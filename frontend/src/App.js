import React from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        <Checkout
          name={'CrowdSourcing Landing Page for Michael'}
          description={'Thank You!'}
          amount={1}
        />
      </p>
    </div>
  );
}

export default App;
