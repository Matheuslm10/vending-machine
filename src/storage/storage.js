function storage(initialProducts, initialQuantities) {
  let allProducts = initialProducts;
  let quantities = initialQuantities;

  function showProducts(filters) {
    if (filters && filters.price) {
      let price = filters.price;

      if (price.max && price.min) {
        if (price.min > price.max) {
          throw Error("Invalid price range.");
        }

        return allProducts.filter(
          (product) => product.price <= price.max && product.price >= price.min
        );
      } else if (!price.max && price.min) {
        return allProducts.filter((product) => product.price >= price.min);
      } else if (price.max && !price.min) {
        return allProducts.filter((product) => product.price <= price.max);
      }
    }
    return allProducts;
  }

  function getTotalPrice(order) {
    let totalPrice = 0.0;
    let product = {};
    order.forEach((item) => {
      product = allProducts.find((product) => product.id === item.productId);
      totalPrice = totalPrice + product.price * item.quantity;
    });
    totalPrice = parseFloat(totalPrice.toFixed(2));

    return totalPrice;
  }

  function isAvailable(productId, quantity) {
    const product = quantities.find(
      (product) => product.productId === productId
    );

    if (!product) throw Error("The product is not registered.");

    return product.quantity >= quantity;
  }

  function incrementBy(productId, increment) {
    const productIndex = quantities.findIndex(
      (product) => product.productId === productId
    );

    if (productIndex === -1) throw Error("The product is not registered.");

    const currentQuantity = quantities[productIndex].quantity;

    quantities[productIndex] = currentQuantity + increment;

    return quantities[productIndex];
  }

  function decrementBy(productId, decrement) {
    const productIndex = quantities.findIndex(
      (product) => product.productId === productId
    );

    if (productIndex === -1) throw Error("The product is not registered.");

    const currentQuantity = quantities[productIndex].quantity;

    quantities[productIndex] = currentQuantity - decrement;

    return quantities[productIndex];
  }

  return {
    showProducts,
    getTotalPrice,
    isAvailable,
    incrementBy,
    decrementBy,
  };
}

export default storage;
