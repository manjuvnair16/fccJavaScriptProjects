/* fcc project: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward
and backward, ignoring punctuation, case, and spacing.
Remove all non-alphanumeric characters before checking
*/

function palindrome(str) {
  //convert string to lower case and remove non-alphanumeric chars
  let newStr = str.toLowerCase().replace(/[^a-z0-9]/g,"");
  //get the mid point of the string
  let limit = Math.floor((newStr.length)/2);

  let j= newStr.length-1;  //the index of the last char in the string
  let palindrome = true;   //set the var to true

  //compare the first and the last char and continue till you reach the midpt or
  //till the chars don't match
  for(let i = 0;i < limit; i++){
    if(newStr[i] !== newStr[j]){
      palindrome = false;   //if chars don't match, set the var to false and break out of the loop
      break;
    }
    j--;
  }
  console.log(palindrome)
  return palindrome;  //returns true or false
}


//test the function
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");

/*console log
true
true
false
true
true
false
false
true
false
true
false */
