
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
