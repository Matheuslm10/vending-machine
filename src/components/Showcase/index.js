import React from "react";

import "./style.css";

function Showcase({ products = [] }) {
  return (
    <div className="showcase">
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className="item">
              <p>{product.name}</p>
              <p>{product.price}</p>
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
