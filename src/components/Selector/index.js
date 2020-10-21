import React, { useState } from "react";

import "./style.css";

function Selector({ handleBuy }) {
  const [productId, setProductId] = useState();
  const [quantity, setQuantity] = useState();

  function handleProductIdChange(event) {
    setProductId(event.target.value);
    // transformar em number aqui
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  return (
    <form onSubmit={handleBuy} className="selector">
      <p>Digite o id do produto:</p>
      <input onChange={(e) => handleProductIdChange(e)} type="number" />
      <p>Digite a quantidade desejada:</p>
      <input onChange={(e) => handleQuantityChange(e)} type="number" />
      <button type="button" onClick={() => handleBuy({ productId, quantity })}>
        Comprar
      </button>
    </form>
  );
}

export default Selector;
