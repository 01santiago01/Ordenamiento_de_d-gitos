let myNumberAsText = prompt("Digita el numero");
let digits = myNumberAsText.split("");

let digit1 = parseInt(digits[0]);
let digit2 = parseInt(digits[1]);
let digit3 = parseInt(digits[2]);

console.log(digit1);
console.log(digit2);
console.log(digit3);

if (digit1 > digit2 && digit1 > digit3 && digit2 > digit3) {
  console.log(digit1, digit2, digit3);
} else {
  if (digit1 > digit2 && digit1 > digit3 && digit3 > digit2) {
    console.log(digit1, digit3, digit2);
  } else {
    if (digit2 > digit1 && digit2 > digit3 && digit1 > digit3) {
      console.log(digit2, digit1, digit3);
    } else {
      if (digit2 > digit1 && digit2 > digit3 && digit3 > digit1) {
        console.log(digit2, digit3, digit1);
      } else {
        if (digit3 > digit2 && digit3 > digit1 && digit2 > digit1) {
          console.log(digit3, digit2, digit1);
        } else {
          if (digit3 > digit2 && digit3 > digit1 && digit2 < digit1) {
            console.log(digit3, digit1, digit2);
          }
        }
      }
    }
  }
}
