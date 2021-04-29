/* Values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/


function rot13(str) {
  let decipherString = '';
  //if letters are from N-Z (charCodes between 78 to 90), subtract 13 from their char codes to display A-M instead
  // elseif letters are between A-M (charCodes >= 65), add 13 to display N-Z instead
  // else incase of any non-alphabetic character, just pass them on
  for(let i=0; i<str.length;i++){
    if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
      decipherString += String.fromCharCode(str.charCodeAt(i)-13);
    } else if (str.charCodeAt(i) >= 65){
      decipherString += String.fromCharCode(13 +str.charCodeAt(i));
    } else {
      decipherString += str[i];
    }
  }

  return decipherString;
}

console.log(rot13("SERR PBQR PNZC"));


/* test console log
FREE CODE CAMP
*/
