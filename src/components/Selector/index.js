import React, { useContext, useEffect, useState } from 'react';
import { CashRegisterContext } from '../../contexts/cashRegisterContext';
import { StorageContext } from '../../contexts/storageContext';

import './style.css';

function Selector() {
  const { performPurchase } = useContext(CashRegisterContext);
  const { getTotalPrice } = useContext(StorageContext);
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleProductIdChange(event) {
    const value = event.target.value;
    setProductId(Number(value));
  }

  function handleQuantityChange(event) {
    const value = event.target.value;
    setQuantity(Number(value));
  }

  useEffect(() => {
    if (productId) {
      setTotalPrice(getTotalPrice([{ productId, quantity }]));
    }
  }, [productId, quantity, getTotalPrice]);

  function handleSubmit(e) {
    e.preventDefault();
    let result = performPurchase(totalPrice);
    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit} className="selector">
      <label>Digite o id do produto:</label>
      <input
        onChange={(e) => handleProductIdChange(e)}
        type="number"
        value={productId}
        min="0"
      />

      <label>Digite a quantidade desejada:</label>
      <input
        onChange={(e) => handleQuantityChange(e)}
        type="number"
        value={quantity}
        min="0"
      />

      <p>Total da compra: R$ {totalPrice.toFixed(2)}</p>

      <button type="submit">Comprar</button>
    </form>
  );
}

export default Selector;
