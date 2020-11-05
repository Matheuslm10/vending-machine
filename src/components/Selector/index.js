import React, { useContext, useEffect, useState } from 'react';
import { CashRegisterContext } from '../../contexts/cashRegisterContext';
import { StorageContext } from '../../contexts/storageContext';

import './style.css';

function Selector() {
  const { performPurchase, purchaseStatus } = useContext(CashRegisterContext);
  const {
    getTotalPrice,
    decrementBy,
    isAvailable,
    moveProductsToPickupSlot
  } = useContext(StorageContext);

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
    let success = false;

    if (isAvailable(productId, quantity)) {
      success = performPurchase(totalPrice);
    } else {
      alert('Produto Indisponível.');
    }

    if (success) {
      decrementBy(productId, quantity);
      moveProductsToPickupSlot(productId, quantity);
    }
  }

  function generateResponse(result) {
    switch (result) {
      case 'not_enough':
        return 'O valor inserido não é suficiente para realizar a compra do produto.';
      case 'success_no_change':
        return 'Compra efetuada com sucesso!';
      case 'no_change_enough':
        return 'Desculpe, no momento não temos moedas para seu troco.';
      case 'success':
        return 'Compra efetuada com sucesso! Por favor, retire o seu troco.';
      case 'no_purchase_yet':
        return 'Nenhuma compra efetuada até o momento.';
      default:
        return 'Ocorreu um erro no sistema.';
    }
  }

  return (
    <form onSubmit={handleSubmit} className="selector">
      <div className="inputField">
        <label>Digite o id do produto:</label>
        <input
          onChange={(e) => handleProductIdChange(e)}
          type="number"
          value={productId}
          min="0"
        />
      </div>

      <div className="inputField">
        <label>Digite a quantidade desejada:</label>
        <input
          onChange={(e) => handleQuantityChange(e)}
          type="number"
          value={quantity}
          min="0"
        />
      </div>

      <p>Total da compra: R$ {totalPrice.toFixed(2)}</p>

      <button type="submit">Comprar</button>

      <p>{generateResponse(purchaseStatus.result)}</p>
    </form>
  );
}

export default Selector;
