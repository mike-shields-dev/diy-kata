const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const namesA = [{ name: "Bart" }];
    expect(joinNames(namesA)).toBe("Bart");

    const namesB = [{ name: "Bart" }, { name: "Lisa" }];
    expect(joinNames(namesB)).toBe("Bart & Lisa");

    const namesC = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
    expect(joinNames(namesC)).toBe("Bart, Lisa & Maggie");
    const namesD = [
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" },
      { name: "Homer" }
    ];
    expect(joinNames(namesD)).toBe("Bart, Lisa, Maggie & Homer");
  });
});
