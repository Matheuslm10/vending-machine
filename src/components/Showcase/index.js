import React, { useContext } from 'react';
import { StorageContext } from '../../contexts/storageContext';

import './style.css';

function Showcase() {
  const { allProducts, quantities } = useContext(StorageContext);

  function getQuantity(product) {
    const isSameId = (item) => item.productId === product.id;
    return quantities.filter(isSameId)[0].quantity;
  }

  return (
    <div className="showcase">
      <ul>
        {allProducts && allProducts.length > 0 ? (
          allProducts.map((product) => (
            <li key={product.id} className="item">
              <p>
                ({product.id}) - {product.name}
              </p>
              <p>Preço: R$ {product.price}</p>
              <p>Qtd. no Estoque: {getQuantity(product)}</p>
            </li>
          ))
        ) : (
          <li>
            <p>Nenhum produto disponível.</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Showcase;
