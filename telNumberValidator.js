/* Return true if the passed string looks like a valid US phone number.*/

function telephoneCheck(str) {
  let numArray = str.match(/[0-9]/g);
  let charArray = str.match(/[^0-9\s\-\(\)]/g);
  //console.log(numArray, charArray);

  if( (numArray.length < 10) || (numArray.length > 11) || (charArray)){
    return false;
  }
  if (numArray.length === 11){
    if (numArray[0] !=='1'){
      return false;
    }
  }
  if(str.match(/[\(\)]/g)){
    if(!(/\(\d\d\d\)/).test(str)){
      return false;
    }
  }
  if(str.match(/^[^0-9\(]/)){
    return false;
  }
  return true;
}

console.log(telephoneCheck("1 555-555-5555"));
