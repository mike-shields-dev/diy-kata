const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("should take a boolean and return the string representation of it", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
