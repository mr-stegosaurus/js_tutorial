//Chapter 5 Exercises
let a = ["ant", "bat", "cat", 42];
a.forEach(let new_array = (element) => {
  console.log(element);
})

let soliloquy = "To be, or not to be, that is the quetsion:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
})
