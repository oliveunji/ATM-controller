require = require("esm")(module);

import Card from "./card";
import Account from "./account";
import Customer from "./customer";
import { Deposit, Withdraw, Transfer } from "./transaction";

// Setup - customer1 info
const card1 = new Card("4556748410020592", "EJ", "04/2022", "7724");
const account1 = new Account("123456");
const account2 = new Account("765432");
const customer1 = new Customer("EJ", "821012345678");
customer1.setCardInfo(card1);
customer1.setAccountInfo(account1);
customer1.setAccountInfo(account2);

// Setup - customer2 info
const account3 = new Account("376482");
const customer2 = new Customer("DJ", "821098765432");
customer2.setAccountInfo(account3);

describe("check Card Class", () => {
  it("check return true if user input valid pin number", () => {
    expect(card1.checkPinNumber("7724")).toBe(true);
  });
  it("check return false if user input valid pin number", () => {
    expect(card1.checkPinNumber("1234")).toBe(false);
  });
});

describe("check Account Class", () => {
  it("check the new account setting", () => {
    expect(account1.getAccountNumber()).toBe("123456");
    expect(account1.getBalance()).toBe(0);
  });
});

describe("check Customer Class", () => {
  it("check the customer's card list", () => {
    expect(customer1.getCardNumberList()).toStrictEqual(["4556748410020592"]);
  });

  it("check the customer's account number list", () => {
    expect(customer1.getAccountNumberList()).toStrictEqual([
      "123456",
      "765432",
    ]);
  });
});

describe("check Transaction class", () => {
  const customer1_account1 = customer1.AccountList[0];
  const customer2_account2 = customer2.AccountList[0];

  it("check customer1_account1 balance is 0", () => {
    expect(customer1_account1.getBalance()).toBe(0);
    expect(customer2_account2.getBalance()).toBe(0);
  });

  it("check customer1_account1 deposit is 10000", () => {
    const transaction1 = new Deposit(customer1_account1, 10000);
    expect(transaction1.getFromAccountBalance()).toBe(10000);
  });

  it("check customer1_account1 withdraw 2000", () => {
    const transaction2 = new Withdraw(customer1_account1, 2000);
    expect(transaction2.getFromAccountBalance()).toBe(8000);
  });

  it("check customer1_account1 transfer 3000", () => {
    const transaction3 = new Transfer(
      customer1_account1,
      customer2_account2,
      3000
    );
    expect(transaction3.getFromAccountBalance()).toBe(5000);
    expect(customer2_account2.getBalance()).toBe(3000);
  });
});
