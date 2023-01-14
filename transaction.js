const TransactionStatus = {
  SUCCESS: 0,
  CANCELLED: 1,
  PENDING: 2,
  ERROR: 3,
};

const TransactionType = {
  BALANCE_INQUIRY: 0,
  DEPOSIT: 1,
  WITHDRAW: 2,
  TRANSFER: 3,
};

class Transaction {
  constructor(fromAccount, toAccount) {
    this.id = "random-generated-guid";
    this.date = "Assign Current Date Time";
    this.fromAccount = fromAccount;
    this.toAccount = toAccount;
  }
}
