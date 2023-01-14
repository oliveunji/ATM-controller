class Customer {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
    this.CardList = [];
    this.AccountList = [];
  }

  getCardNumberList = function () {
    let result = [];
    this.CardList.forEach((card) => {
      result.push(card.getCardNumber());
    });
    return result;
  };

  setCardInfo = function (card) {
    this.CardList.push(card);
  };

  getAccountNumberList = function () {
    let result = [];
    this.AccountList.forEach((account) => {
      result.push(account.getAccountNumber());
    });
    return result;
  };

  setAccountInfo = function (account) {
    this.AccountList.push(account);
  };
}

export default Customer;
