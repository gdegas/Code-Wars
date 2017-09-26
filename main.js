
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
