import React, { useState, createContext } from 'react';

export const CashRegisterContext = createContext();

export const CashRegisterContextProvider = (props) => {
  const currenciesIndexes = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
  const [cash, setCash] = useState([50, 50, 50, 30, 20, 20]);
  const [insertedCoins, setInsertedCoins] = useState([0, 0, 0, 0, 0, 0]);
  const [change, setChange] = useState([0, 0, 0, 0, 0, 0]);
  const [purchaseStatus, setPurchaseStatus] = useState({
    result: 'no_purchase_yet',
    success: false
  });

  function calculateValue(coins) {
    let counter = 0;
    currenciesIndexes.forEach((currency, index) => {
      counter += coins[index] * currency;
    });

    return counter;
  }

  function calculateChange(depositValue, price) {
    let currentCash = Array.from(cash);
    let changeValue = (depositValue - price).toFixed(2);
    let calculatedChange = [0, 0, 0, 0, 0, 0];

    currenciesIndexes.forEach((currency, index) => {
      if (currency <= changeValue) {
        let currencyQtd = Math.floor(changeValue / currency);

        if (currentCash[index] >= currencyQtd) {
          currentCash[index] -= currencyQtd;
          calculatedChange[index] = currencyQtd;
          changeValue = (changeValue - currencyQtd * currency).toFixed(2);
        }
      }
    });

    return { changeValue, calculatedChange };
  }

  function subtractFromCash(coins) {
    let newCash = [];
    cash.forEach((quantity, index) => {
      newCash.push(quantity - coins[index]);
    });
    setCash(newCash);

    // TODO - talvez isso não funcione.
    return calculateValue(cash);
  }

  function receiveDeposit(coins) {
    let newCash = [];
    cash.forEach((quantity, index) => {
      newCash.push(quantity + coins[index]);
    });
    setCash(newCash);

    // TODO - talvez isso não funcione.
    return calculateValue(cash);
  }

  function performPurchase(price) {
    price = price.toFixed(2);
    const depositValue = calculateValue(insertedCoins).toFixed(2);
    let success = false;

    if (depositValue < price) {
      success = false;
      setPurchaseStatus({
        result: 'not_enough',
        success
      });
      setChange(insertedCoins);
    } else if (depositValue === price) {
      success = true;
      receiveDeposit(insertedCoins);
      setPurchaseStatus({
        result: 'success_no_change',
        success
      });
      setChange([0, 0, 0, 0, 0, 0]);
    } else {
      let { changeValue, calculatedChange } = calculateChange(
        depositValue,
        price
      );

      if (changeValue > 0) {
        success = false;
        setPurchaseStatus({
          result: 'no_change_enough',
          success
        });
        setChange(insertedCoins);
      } else {
        success = true;
        receiveDeposit(insertedCoins);
        setPurchaseStatus({
          result: 'success',
          success
        });
        setChange(calculatedChange);
      }
    }
    setInsertedCoins([0, 0, 0, 0, 0, 0]);
    return success;
  }

  return (
    <CashRegisterContext.Provider
      value={{
        currenciesIndexes,
        insertedCoins,
        setInsertedCoins,
        change,
        setChange,
        purchaseStatus,
        setPurchaseStatus,
        calculateValue,
        calculateChange,
        subtractFromCash,
        receiveDeposit,
        performPurchase
      }}
    >
      {props.children}
    </CashRegisterContext.Provider>
  );
};
