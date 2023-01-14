class Card {
  constructor(cardNum, name, expiryDate, pin) {
    var _cardNum = cardNum;
    var _name = name;
    var _expiryDate = expiryDate;
    var _pin = pin;

    this.checkPinNumber = function (pin) {
      if (_pin == pin) {
        return true;
      } else {
        return false;
      }
    };
  }
}

export default Card;
