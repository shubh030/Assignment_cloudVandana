function reverseString(str) {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
      rev += str[i];
    }
    return rev;
  }
  
  const OriginalString = "CloudVandana";
  const reversedString = reverseString(OriginalString);
  console.log("Original String: " + OriginalString);
  console.log("Reversed String: " + reversedString);
  