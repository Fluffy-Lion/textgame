const inquirer = require("inquirer");
let { rand, game, gameChecker, inputChecker, quickFunc } = require("../funcs");

describe("rand function test", () => {
  let arrayGen = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let num = rand();
      arr.push(num);
    }
    return arr;
  };
  test("arrayGen from rand is never 2", () => {
    expect(arrayGen()).not.toContain(2);
  });
  test("arrayGen from rand contains 0", () => {
    expect(arrayGen()).toContain(0);
  });
  test("arrayGen from rand contains 1", () => {
    expect(arrayGen()).toContain(1);
  });
});
describe("game function", () => {
  let arrayGen = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      let option = game();
      arr.push(option);
    }
    return arr;
  };
  test("returns scissor in array", () => {
    expect(arrayGen()).toContain("scissors");
  });
  test("returns rock in array", () => {
    expect(arrayGen()).toContain("rock");
  });
  test("returns rock in array", () => {
    expect(arrayGen()).toContain("paper");
  });
  test("does not return plane", () => {
    expect(arrayGen()).not.toContain("plane");
  });
});

describe("game checker", () => {
  test("game checker returns boolean", () => {
    expect(typeof gameChecker("rock")).toBe("boolean");
  });
  let arrayGen = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(gameChecker("rock"));
    }
    return arr;
  };
  test("game checker only returns boolean values", () => {
    expect(arrayGen()).toContain(true);
  });
  test("game checker only returns boolean values", () => {
    expect(arrayGen()).toContain(false);
  });
  test("game checker doesn't return a string value", () => {
    expect(arrayGen()).not.toContain("rock");
  });
});

describe("input checker", () => {
  test("if contains a number, returns 'contains number'", () => {
    expect(inputChecker("l3on")).toEqual("contains number");
  });
  test("checking white space with trim", () => {
    expect(inputChecker("      leon   ")).toEqual("leon");
  });
  test("if nothing is entered return 'please enter text'", () => {
    expect(inputChecker(" ")).toEqual("please enter text");
  });
});
