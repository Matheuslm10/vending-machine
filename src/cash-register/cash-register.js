const currenciesIndexes = [0.01, 0.05, 0.1, 0.25, 0.5, 1];

function receiveDeposit(coins) {
  let counter = 0;
  currenciesIndexes.forEach((currency, index) => {
    counter += coins[index] * currency;
  });

  return "You have $ " + counter + ".";
}

export { receiveDeposit };
