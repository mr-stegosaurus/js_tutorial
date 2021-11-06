
// Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a plaindrom, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Return an array of the username and domain for a standard email
function emailParts(email) {
  let processedEmail = email.toLowerCase();
  return processedEmail.split("@")
}

//TEST CODE FOR GIT PUSH CONFIG
//MORE TEST CODE
