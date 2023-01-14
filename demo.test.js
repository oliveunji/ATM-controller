require = require("esm")(module);
import Card from "./card";

describe("check Card Class", () => {
  const card1 = new Card("4556748410020592", "EJ", "04/2022", "7724");
  it("check return true if user input valid pin number", () => {
    expect(card1.checkPinNumber("7724")).toBe(true);
  });
  it("check return false if user input valid pin number", () => {
    expect(card1.checkPinNumber("1234")).toBe(false);
  });
});

describe("check Account Class", () => {});

// Customer 생성
// Account List 확인
// 입금 출금 확인
