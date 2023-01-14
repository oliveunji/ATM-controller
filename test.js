// 1. Create Customer
const account1 = new Account("67927548");
const account2 = new Account("15832938");
const card1 = new Card("4556748410020592", "EJ", "04/2022", "7724");
const customer1 = new Customer("EJ", "821012345678", card1, [
  account1,
  account2,
]);

// 2. Check Card Info
