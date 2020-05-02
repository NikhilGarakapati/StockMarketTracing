import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import StockRow from './components/StockRow';

function App() {
  return (
    <div className="App">
      <div className= "Container">
        <table className = "table mt-5">
          <thead>
             <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <StockRow ticker = "aapl"/>
            <StockRow ticker = "goog"/>
            <StockRow ticker = "msft"/>
            <StockRow ticker = "tsla"/>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
