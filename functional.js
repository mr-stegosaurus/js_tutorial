let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

//urls: Imperative version
function imperativeUrls(elements) {
  let urls= [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}

console.log(imperativeUrls(states));

//urls: functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//6.1.1
function exampleUrls(elements) {
  return elements.map(element => "https://example.com/" + urlify(element))
}
console.log(exampleUrls(states));

//singles: imperative version
function imperativeSingles(elements) {
  let singles = []
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element)
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

//singles: functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1)
}
console.log(functionalSingles(states));

//6.2.1
function findDakota(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"))
}
console.log(findDakota(states));

function findDakotaRegex(states) {
  return states.filter(state => state.split(/\s+/).length === 2)
}
console.log(findDakotaRegex(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n
  });
  return total;
}
console.log(imperativeSum(numbers));

//sum: functional solution
function functionalSum(numbers) {
  return numbers.reduce((total, n) => { return total += n; })
}
console.log(functionalSum(numbers));


//lengths: imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  })
  return lengths;
}
console.log(imperativeLengths(states));

//lengths: functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length;
                          return lengths;
                          }, {});
}
console.log(functionalLengths(states));
