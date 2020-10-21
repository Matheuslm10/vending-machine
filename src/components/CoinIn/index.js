import React from "react";

import "./style.css";

function CoinIn({ totalPrice }) {
  return (
    <div className="coin-in">
      <p>CoinIn</p>
      {totalPrice && <p>Por favor, insira R$ {totalPrice}</p>}
    </div>
  );
}

export default CoinIn;
