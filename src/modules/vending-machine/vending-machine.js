function vendingMachine() {
  let state = {
    observers: [],
  };

  function registerObserver(observer) {
    state.observers.push(observer);
  }

  function notifyObservers(event, payload) {
    const returnedValues = [];
    let returnedValue;
    for (const observer of state.observers) {
      returnedValue = observer.update(event, payload);
      if (returnedValue) {
        returnedValues.push(returnedValue);
      }
    }
    return returnedValues;
  }

  return {
    registerObserver,
    notifyObservers,
  };
}

export default vendingMachine;
