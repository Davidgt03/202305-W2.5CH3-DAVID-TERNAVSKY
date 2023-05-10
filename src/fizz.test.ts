import { FizzBuzz } from "./fizz.js";

describe("Given the function FizzBuzz", () => {
  describe("When given the number 3 and number 5", () => {
    test("Then it should return Fizz Buzz", () => {
      const num1 = 3;
      const num2 = 5;

      const expectedResult = ["Fizz", 4, "Buzz"];
      const resultReturned = FizzBuzz(num1, num2);

      expect(resultReturned).toStrictEqual(expectedResult);
    });
  });
});
