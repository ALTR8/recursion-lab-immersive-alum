// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {

    if (myString.length < 2) {
        return myString
    } else {
        return reverseString(myString.substring(1)) + myString[0]
    }
 }

 function isPalindrome(myString) {
   let length = myString.length;

   if (length < 2) {
     return true;
 } else if (myString[length - 1] === myString[0]) {
     return isPalindrome(myString.substring(1, length - 1));
   } else {
     return false;
   }
 }

 function addUpTo(myArray, i) {
     if (i < 1) {
         return myArray[i];
     } else {
         return myArray[i] + addUpTo(myArray, --i)
     }
 }

 function maxOf(array) {
     if (array.length < 2) {
         return array[0]
     } else {
         return Math.max(array.pop(), maxOf(array))
     }
 }

 function includesNumber(array, n) {
     if (array.length < 1) {
         return false;
     } else if (array[0] === n){
         return true;
     } else {
         return includesNumber(array.slice(1), n)
     }
 }
