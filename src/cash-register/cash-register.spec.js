import cashRegister from "./cash-register";

describe("cash-register", () => {
  let cash_register;

  beforeEach(() => {
    cash_register = cashRegister([10, 10, 10, 10, 10, 10]); // initial value = 19.1
  });

  afterAll(() => {
    cash_register = null;
  });

  it("Should have a receiveDeposit function.", () => {
    expect(cash_register.receiveDeposit).toBeDefined();
  });

  it("Should have a performPurchase function.", () => {
    expect(cash_register.performPurchase).toBeDefined();
  });

  it("Should receive deposit and add to the cash.", () => {
    const coins = [2, 1, 1, 0, 1, 3];
    const expectedOutput = 21.93;

    const output = cash_register.receiveDeposit(coins);

    expect(output).toBe(expectedOutput);
  });

  it("Should perform purchase with success and no change.", () => {
    const deposit = [1, 2, 0, 0, 0, 0];
    const price = 2.0;
    const expectedSuccessStatus = true;
    const expectedMessage = "Purchase successful!";
    const expectedChange = null;

    const output = cash_register.performPurchase(deposit, price);

    expect(output.success).toBe(expectedSuccessStatus);
    expect(output.message).toBe(expectedMessage);
    expect(output.change).toBe(expectedChange);
  });

  it("Should perform purchase with success and return the change.", () => {
    const deposit = [1, 1, 0, 0, 0, 0];
    const price = 1.2;
    const expectedSuccessStatus = true;
    const expectedMessage = "Purchase successful!";
    const expectedChange = [0, 0, 1, 0, 1, 0];

    const output = cash_register.performPurchase(deposit, price);

    expect(output.success).toBe(expectedSuccessStatus);
    expect(output.message).toBe(expectedMessage);
    expect(output.change).toStrictEqual(expectedChange);
  });

  it("Should perform purchase with error, inform that there is no change enough for the deposit and return the deposit.", () => {
    const cash_register = cashRegister([1, 0, 0, 0, 0, 0]);
    const deposit = [2, 0, 0, 0, 0, 0];
    const price = 1.5;
    const expectedSuccessStatus = false;
    const expectedMessage = "There is no change enough for the deposit.";
    const expectedChange = deposit;

    const output = cash_register.performPurchase(deposit, price);

    expect(output.success).toBe(expectedSuccessStatus);
    expect(output.message).toBe(expectedMessage);
    expect(output.change).toBe(expectedChange);
  });

  it("Should perform purchase with error, inform that the deposit is not enough and return the deposit.", () => {
    const deposit = [2, 0, 0, 0, 0, 0];
    const price = 5.0;
    const expectedSuccessStatus = false;
    const expectedMessage = "The deposit is not enough.";
    const expectedChange = deposit;

    const output = cash_register.performPurchase(deposit, price);

    expect(output.success).toBe(expectedSuccessStatus);
    expect(output.message).toBe(expectedMessage);
    expect(output.change).toBe(expectedChange);
  });
});
