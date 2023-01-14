class Transaction {
  constructor(fromAccount, toAccount) {
    this.id = "random-generated-guid";
    this.date = "Assign Current Date Time";
    this.fromAccount = fromAccount;
    this.toAccount = toAccount;
    this.getFromAccountBalance = function () {
      return this.fromAccount.getBalance();
    };
  }
}

class Deposit extends Transaction {
  constructor(fromAccount, amount) {
    super(fromAccount, fromAccount);
    const updatedAmount = amount + fromAccount.getBalance();
    fromAccount.setBalance(updatedAmount);
  }
}

class Withdraw extends Transaction {
  constructor(fromAccount, amount) {
    super(fromAccount, fromAccount);
    const curBalance = fromAccount.getBalance();
    if (curBalance >= amount) {
      fromAccount.setBalance(curBalance - amount);
    } else {
      throw new Error(
        "[Transaction Failure] You don't have enough money to Withdraw."
      );
    }
  }
}

class Transfer extends Transaction {
  constructor(fromAccount, toAccount, amount) {
    super(fromAccount, toAccount);
    const curBalance = fromAccount.getBalance();
    if (curBalance >= amount) {
      fromAccount.setBalance(curBalance - amount);
      toAccount.setBalance(toAccount.getBalance() + amount);
    } else {
      throw new Error(
        "[Transaction Failure] You don't have enough money to Transfer."
      );
    }
  }
}

export { Deposit, Withdraw, Transfer };
