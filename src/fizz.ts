export function FizzBuzz(num1: number, num2: number) {
  let array: any[] = [];
  for (let number = num1; number <= num2; number++) {
    array.push(number);
    if (number % 3 === 0 && number % 5 === 0) {
      array.pop();
      array.push("FizzBuzz");
    }
    if (number % 3 === 0) {
      array.pop();
      array.push("Fizz");
    }
    if (number % 5 === 0) {
      array.pop();
      array.push("Buzz");
    }
  }
  return array;
}
FizzBuzz(3, 5);
//export { FizzBuzz };
