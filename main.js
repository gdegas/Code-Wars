
let string = 'Hello man'
let string2 = 'hello there.'

function reverse(input) {
  const split = input.split(' ').reverse().join(' ')
  return split
}


let arrayOfSheep1 = [true, true, true, false]

function arrayOfSheep(array) {
  let count = 0
    for(let i = 0; i < array.length; i++) {
      if(array[i] === true) {
        count++
      }
    }
  return count
}

function duplicateEncode(word){

  var hasDuplicates = (/([a-zA-Z]).*?\1/).test(word)
  // let newString = word.replace(/([a-zA-Z]).*?\1/, ')')
  let newString = word.replace(/^([a-zA-Z])\1+$/, ')')

  // let array = word.split('')
  // for (let i = 0; i < array.length; i++) {
  //
  // }
  // if the string has duplicates, add ) to the new string, if it doesn't add (
  if (hasDuplicates) {
    newString += ')'
  } else {
    newString += '('
  }

  return newString
}

// ## ISSUE 3

function duplicateEncode(word){
  let duplicateLetter = {}
  let newString = ''
  const arrayWord = word.split('')
  for(let i = 0; i < arrayWord.length; i++) {
    const lowerCaseLetter = arrayWord[i].toLowerCase()
    if(lowerCaseLetter in duplicateLetter) {
      duplicateLetter[lowerCaseLetter] += 1
    } else {
      duplicateLetter[lowerCaseLetter] = 1
    }
  }

  for(let i = 0; i < arrayWord.length; i++) {
    if(duplicateLetter[arrayWord[i].toLowerCase()] > 1) {
      newString += ')'
    } else {
      newString += '('
    }
  }
  return newString
}

// ## ISSUE 4

function reverseWords(str) {
  const arrayWords = str.split(' ')
  const reverseArray = arrayWords.map(function(word) {
    return word.split('').reverse().join('')
  })
  return reverseArray.join(' ')
}

// ## ISSUE 5

const seniors = [[45, 12],[55,21],[19, -2],[104, 20]]

function openOrSenior(data){
  let seniorArray = []
  for (let i = 0; i < data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7){
        seniorArray.push('Senior')
    } else {
        seniorArray.push('Open')
    }
  }
  return seniorArray
}

// ## ISSUE 6

function descendingOrder(n){

  const arrayNum = n.toString().split('').sort((a, b) => b - a)
  const descString = arrayNum.join('')

  return +descString
}

// ## ISSUE 7

function sequenceSum(begin, end, step) {
  let count = 0
  if (begin > end) {
    return 0}
  for(let i = begin; i <= end; i += step) {
    count += i
    }
  return count
}

// ## ISSUE 8


function getCharNumber(string1, string2) {
  let count1 = 0
  let count2 = 0
  let str1 = string1.toUpperCase()
  let str2 = string2.toUpperCase()
  for (let i = 0; i < str1.length; i++) {
    if(!string1) {
      string1 = ""
    }
    else {
      count1 += str1.charCodeAt(i)
    }
  }
  for (let i = 0; i <str2.length; i++) {
    if (!string2) {
      string2 = ""
    }
    else {
      count2 += str2.charCodeAt(i)
    }
  }
  console.log('count1:' + count1, 'count2: ' + count2)
  return count1 === count2
}


function reverse (str) {
    if (str === "") {
      return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

// ISSUE # 9

function palindrome(str) {
  str = str.replace(/[\W_]+/g, '')
  str = str.toLowerCase()
  const reversedStr = str.split('').reverse().join('')
  return str === reversedStr
}

// ISSUE #10

function findLongestWord(str) {
  var longestWord = '';
  var wordsArray = str.split(' ');
  for (var i = 0; i < wordsArray.length; i++) {
    if(wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord.length;
}

// ISSUE #11

function largestOfFour(arr) {
  var outputArray = [];
  arr.forEach(function(element) {
    var largestNumber = 0;
    for(var i = 0; i < element.length; i++) {
      if(element[i] > largestNumber) {
        largestNumber = element[i];
      }
    }
    outputArray.push(largestNumber)
  })
  return outputArray
}

// ISSUE #12

function getIndexToIns(arr, num) {
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  console.log('sortedArray: ', sorted)
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] > num) {
      return i;
    }
  }
  return arr.length
}

// ISSUE 13

function destroyer(arr) {
  var args1 = Array.from(arguments).slice(1);
  var args2 = Array.prototype.slice.call(arguments)
  console.log('from example:', args1)
  console.log('Using slice and call; ',args2)
}

// ISSUE 14

function diffArray(arr1, arr2) {
  var newArr = [];
 // sort the array from smallest to largest number with reduce
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  } else {
    for (var i = 0; i<arr1.length; i++) {
      if(arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
      }
      for(var j = 0; j<arr2.length; j++) {
        if(arr1.indexOf(arr2[j]) === -1) {
        newArr.push(arr2[j]);
        }
      }
    }
    return newArr;
  }
}

// Pluralsight capitalize first letter of each word in a sentence

function titleCase(str) {
  if (!str.length) {
    return ''
  }

  str = str.toLowerCase()

  const stayLower = [
    "a",
    "the",
    "to",
    "at",
    "in",
    "with",
    "and",
    "but",
    "or"
  ]
  const wordsArray = str.split(' ');

  for (var i = 1; i < wordsArray.length - 1; i++) {
    if (!stayLower.includes(wordsArray[i]) || i === 0 || i === wordsArray.length -1) {
      wordsArray[i] = capitalize(wordsArray[i])
    }
  }
  function capitalize(word) {
     return word.charAt(0).toUpperCase() + word.substr(1)
  }
  return wordsArray.join(' ')
}

/// ROMAN NUMERAL CONVERSION


function convertToRoman(num) {
  // create a array with number that correspond with the roman numerals of another array
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // create an array of roman numerals, in positions that correspond with our numbers array so that we can compare them
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var outputString = '';

  // iterate through our numers array, check if a number is less than the argument given, if it is, add the corresponding indexed item from roman numeral array to the outputstring
  for (var i = 0; i < numbers.length; i++) {
    // if num is less than the current number we are on
    while(numbers[i] <= num) {
      // concat our output string with the roman numeral at the corresponding index
      outputString += romanNumeral[i];
      console.log(romanNumeral[i]);
      num -= numbers[i];
    }
  }



 return outputString;
}


// WHERE ART THOU- FREE CODE CAMP ALGORITHM

function whatIsInAName(collection, source) {
  // convert properties from source object in an array
  var sourceProps = Object.keys(source);
 // filter out unwanted objects
  return collection.filter(function(obj) {
    // loop through the keys from source object
    for (var i = 0; i < sourceProps.length; i++) {
      // for each key in source, if our object doesn't have the key as a property or if the value of that property in our source object doesn't match that same value in our collection object, do not include it.
      if(!obj.hasOwnProperty(sourceProps[i]) || source[sourceProps[i]] !== obj[sourceProps[i]]) {
        return false;
      }
     }
   return true;
  });
