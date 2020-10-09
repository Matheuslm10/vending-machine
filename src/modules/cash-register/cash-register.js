function cashRegister(initialCoins, vendingMachineObserver) {
  let cash = initialCoins;
  const currenciesIndexes = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

  function update(event, payload) {
    if (event === "perform_purchase") {
      return performPurchase(payload.deposit, payload.price);
    }
    if (event === "deposit") {
      return receiveDeposit(payload);
    }
  }

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
    let change = [0, 0, 0, 0, 0, 0];

    currenciesIndexes.forEach((currency, index) => {
      if (currency <= changeValue) {
        let currencyQtd = Math.floor(changeValue / currency);

        if (currentCash[index] >= currencyQtd) {
          currentCash[index] -= currencyQtd;
          change[index] = currencyQtd;
          changeValue = (changeValue - currencyQtd * currency).toFixed(2);
        }
      }
    });

    return { changeValue, change };
  }

  function subtractFromCash(coins) {
    cash.forEach((quantity, index) => {
      cash[index] = quantity - coins[index];
    });

    return calculateValue(cash);
  }

  function generateResponse(type, coins) {
    switch (type) {
      case "not_enough":
        return {
          success: false,
          message: "The deposit is not enough.",
          change: coins,
        };
      case "success_no_change":
        return {
          success: true,
          message: "Purchase successful!",
          change: coins,
        };
      case "no_change_enough":
        return {
          success: false,
          message: "There is no change enough for the deposit.",
          change: coins,
        };
      case "success":
        return {
          success: true,
          message: "Purchase successful!",
          change: coins,
        };
      default:
        throw new TypeError(
          "There no response for this type",
          "cash-register.js"
        );
    }
  }

  function receiveDeposit(coins) {
    cash.forEach((quantity, index) => {
      cash[index] = quantity + coins[index];
    });

    return calculateValue(cash);
  }

  function performPurchase(deposit, price) {
    price = price.toFixed(2);
    const depositValue = calculateValue(deposit).toFixed(2);

    if (depositValue < price) {
      return generateResponse("not_enough", deposit);
    } else if (depositValue === price) {
      receiveDeposit(deposit);
      return generateResponse("success_no_change", null);
    } else {
      let { changeValue, change } = calculateChange(depositValue, price);

      if (changeValue > 0) {
        return generateResponse("no_change_enough", deposit);
      } else {
        receiveDeposit(deposit);
        subtractFromCash(change);
        return generateResponse("success", change);
      }
    }
  }

  return {
    update,
    receiveDeposit,
    performPurchase,
  };
}

export default cashRegister;
