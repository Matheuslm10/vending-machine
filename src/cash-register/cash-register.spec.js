import * as CashRegister from "./cash-register";

describe("cash-register", () => {
  it("Should have a function to receive a deposit.", () => {
    expect(CashRegister.receiveDeposit).toBeDefined();
  });

  it("Should know the total value by summing the different types of currencies.", () => {
    // [$ 0.01, $ 0.05, $ 0.10, $ 0.25, $ 0.50, $ 1]
    const coins = [3, 1, 0, 1, 1, 2];
    const expectedOutput = "You have $ 2.83.";

    let output = CashRegister.receiveDeposit(coins);

    expect(output).toBe(expectedOutput);
  });
});
