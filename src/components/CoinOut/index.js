import React, { useContext } from 'react';
import { CashRegisterContext } from '../../contexts/cashRegisterContext';

import './style.css';

function CoinOut() {
  const { change, calculateValue, currenciesIndexes } = useContext(
    CashRegisterContext
  );

  return (
    <div className="coin-out">
      <p>Retire seu troco aqui:</p>
      <ul className="quantities-list">
        {change && calculateValue(change) > 0 ? (
          change.map(
            (quantity, index) =>
              quantity > 0 && (
                <li key={index}>
                  <p>
                    {quantity} de R$ {currenciesIndexes[index]}
                  </p>
                </li>
              )
          )
        ) : (
          <li>
            <p>Não há troco.</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default CoinOut;
