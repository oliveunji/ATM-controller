class Account {
  constructor(accountNumber) {
    var _accountNumber = accountNumber;
    var _balance = 0;

    this.getAccountNumber = function () {
      return _accountNumber;
    };
    this.getBalance = function () {
      return _balance;
    };
    this.setBalance = function (balance) {
      _balance = balance;
      return _balance;
    };
  }
}
