import React, { useContext, useEffect, useState, useRef } from 'react';
import { CashRegisterContext } from '../../contexts/cashRegisterContext';
import { StorageContext } from '../../contexts/storageContext';

import './style.css';

function Selector() {
  const { performPurchase } = useContext(CashRegisterContext);
  const storageContextRef = useRef(useContext(StorageContext));
  const [productId, setProductId] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleProductIdChange(event) {
    const value = event.target.value;
    setProductId(value);
    // transformar em number aqui
  }

  function handleQuantityChange(event) {
    const value = event.target.value;
    setQuantity(value);
  }

  useEffect(() => {
    if (productId > 0) {
      console.log('entrou no if do useEffect com product igual a ', productId);
      setTotalPrice(
        storageContextRef.current.getTotalPrice([{ productId, quantity }])
      );
    }
  }, [productId, quantity]);

  return (
    <form onSubmit={() => performPurchase(totalPrice)} className="selector">
      <p>Digite o id do produto:</p>
      <input
        onChange={(e) => handleProductIdChange(e)}
        type="number"
        value={productId}
        min="0"
      />

      <p>Digite a quantidade desejada:</p>
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
