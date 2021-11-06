//sum: functional products
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function functionalSum(numbers) {
  return numbers.reduce((total, n) => { return total *= n; }, 1)
}
console.log(functionalSum(numbers));
