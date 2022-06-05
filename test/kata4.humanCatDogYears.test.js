const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("should take an amount of time in human years and return an object containing the number of years in dog years and cat years", () => {
    const humanYearsA = 1;
    const dogCatYearsA = { dogYears: 15, catYears: 15 };
    expect(humanCatDogYears(humanYearsA)).toStrictEqual(dogCatYearsA);
    const humanYearsB = 2;
    const dogCatYearsB = { dogYears: 24, catYears: 24 };
    expect(humanCatDogYears(humanYearsB)).toStrictEqual(dogCatYearsB);
    const humanYearsC = 3;
    const dogCatYearsC = { dogYears: 29, catYears: 28 };
    expect(humanCatDogYears(humanYearsC)).toStrictEqual(dogCatYearsC);
    const humanYearsD = 4;
    const dogCatYearsD = { dogYears: 34, catYears: 32 };
    expect(humanCatDogYears(humanYearsD)).toStrictEqual(dogCatYearsD);
  });
    });
    expect(humanCatDogYears(3)).toStrictEqual({
      dogYears: 29,
      catYears: 28
    });
    expect(humanCatDogYears(4)).toStrictEqual({
      dogYears: 34,
      catYears: 32
    });
  });
});
