import storage from "./storage.mjs";
import {
  products_fixture,
  quantities_fixture,
} from "../fixtures/storage-initial-state-fixture.mjs";

describe("Storage", () => {
  let storage_test;

  beforeEach(() => {
    storage_test = storage(products_fixture, quantities_fixture);
  });

  it("Should have a showProducts function", () => {
    expect(storage_test.showProducts).toBeDefined();
  });

  it("Should show all the products available, with no price filter.", () => {
    let allProducts = storage_test.showProducts();
    expect(allProducts).toStrictEqual(products_fixture);
  });

  it("Should show all the products available, with max price filter.", () => {
    let products = storage_test.showProducts({ price: { max: 2.0 } });
    let expectedOutput = [
      {
        id: 1,
        name: "Prestígio",
        price: 2.0,
      },
      {
        id: 4,
        name: "KitKat",
        price: 1.8,
      },
    ];
    expect(products).toStrictEqual(expectedOutput);
  });

  it("Should show all the products available, with min price filter.", () => {
    let products = storage_test.showProducts({ price: { min: 2.2 } });
    let expectedOutput = [
      {
        id: 2,
        name: "Chokito",
        price: 3.5,
      },
      {
        id: 3,
        name: "Charge",
        price: 2.2,
      },
    ];
    expect(products).toStrictEqual(expectedOutput);
  });

  it("Should show all the products available, with min and max price filter.", () => {
    let products = storage_test.showProducts({ price: { min: 2.0, max: 2.2 } });
    let expectedOutput = [
      {
        id: 1,
        name: "Prestígio",
        price: 2.0,
      },
      {
        id: 3,
        name: "Charge",
        price: 2.2,
      },
    ];
    expect(products).toStrictEqual(expectedOutput);
  });

  it("Should throw error if the min price filter is greater than the max, when trying to show products with wrong filters.", () => {
    expect(() => {
      storage_test.showProducts({ price: { min: 2.2, max: 2.0 } });
    }).toThrow("Invalid price range.");
  });

  it("Should have a getTotalPrice function.", () => {
    expect(storage_test.getTotalPrice).toBeDefined();
  });

  it("Should return the total price given a list of products with their respective quantities.", () => {
    const order = [
      { productId: 3, quantity: 1 },
      { productId: 4, quantity: 2 },
    ];
    const totalPrice = storage_test.getTotalPrice(order);
    const expectedTotalPrice = 5.8;

    expect(totalPrice).toEqual(expectedTotalPrice);
  });

  it("Should have a isAvailable function.", () => {
    expect(storage_test.isAvailable).toBeDefined();
  });

  it("Should inform that the given quantity of a product is available in the storage.", () => {
    const productId = 2;
    const quantity = 1;
    const isAvailable = storage_test.isAvailable(productId, quantity);

    expect(isAvailable).toBeTruthy();
  });

  it("Should inform that the given quantity of a product is not available in the storage.", () => {
    const productId = 1;
    const quantity = 1;
    const isAvailable = storage_test.isAvailable(productId, quantity);

    expect(isAvailable).toBeFalsy();
  });

  it("Should throw error if the product is not registered, when informing the availability of a product given a quantity.", () => {
    const productId = 5;
    const quantity = 1;

    expect(() => {
      storage_test.isAvailable(productId, quantity);
    }).toThrow("The product is not registered.");
  });

  it("Should have a incrementBy function.", () => {
    expect(storage_test.incrementBy).toBeDefined();
  });

  it("Should increment the quantity of a product.", () => {
    const productId = 1;
    const increment = 10;
    const newQuantityExpected = 10;

    const newQuantity = storage_test.incrementBy(productId, increment);

    expect(newQuantity).toBe(newQuantityExpected);
  });

  it("Should have a decrementBy function.", () => {
    expect(storage_test.decrementBy).toBeDefined();
  });

  it("Should decrement the quantity of a product.", () => {
    const productId = 2;
    const decrement = 2;
    const newQuantityExpected = 12;

    const newQuantity = storage_test.decrementBy(productId, decrement);

    expect(newQuantity).toBe(newQuantityExpected);
  });
});
