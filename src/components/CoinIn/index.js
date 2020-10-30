import React, { useState, useContext } from 'react';
import { CashRegisterContext } from '../../contexts/cashRegisterContext';

import './style.css';

function CoinIn() {
  const { insertedCoins, setInsertedCoins, calculateValue } = useContext(
    CashRegisterContext
  );
  const [coins, setCoins] = useState([0, 0, 0, 0, 0, 0]);

  function handleQuantityOfCurrancyChange(event, currencyIndex) {
    const value = event.target.value;
    setCoins((prev) =>
      prev.map((currency, index) => {
        if (index === currencyIndex) {
          return value;
        } else {
          return currency;
        }
      })
    );
  }

  function handleInsertCoins() {
    setInsertedCoins(coins);
  }

  return (
    <div className="coin-in">
      <p>CoinIn</p>

      <div className="coins-input-group">
        <div className="coin-input">
          <p>R$ 1,00</p>
          <input
            value={coins[0]}
            onChange={(e) => handleQuantityOfCurrancyChange(e, 0)}
            type="number"
            min="0"
          />
        </div>

        <div className="coin-input">
          <p>R$ 0,50</p>
          <input
            value={coins[1]}
            onChange={(e) => handleQuantityOfCurrancyChange(e, 1)}
            type="number"
            min="0"
          />
        </div>

        <div className="coin-input">
          <p>R$ 0,25</p>
          <input
            value={coins[2]}
            onChange={(e) => handleQuantityOfCurrancyChange(e, 2)}
            type="number"
            min="0"
          />
        </div>

        <div className="coin-input">
          <p>R$ 0,10</p>
          <input
            value={coins[3]}
            onChange={(e) => handleQuantityOfCurrancyChange(e, 3)}
            type="number"
            min="0"
          />
        </div>

        <div className="coin-input">
          <p>R$ 0,05</p>
          <input
            value={coins[4]}
            onChange={(e) => handleQuantityOfCurrancyChange(e, 4)}
            type="number"
            min="0"
          />
        </div>

        <div className="coin-input">
          <p>R$ 0,01</p>
          <input
            value={coins[5]}
            onChange={(e) => handleQuantityOfCurrancyChange(e, 5)}
            type="number"
            min="0"
          />
        </div>
      </div>

      <button
        className="insert-button"
        type="button"
        onClick={() => handleInsertCoins()}
      >
        Inserir Moedas
      </button>

      <p className="total-inserted">
        Total Inserido: R$ {calculateValue(insertedCoins).toFixed(2)}
      </p>
    </div>
  );
}

export default CoinIn;
