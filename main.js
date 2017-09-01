function printErrors(s) {
  let numerator = 0
  const length = s.length
  const stringArray = s.split('')
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes('n')) {
      numerator++
    } else if (stringArray[i].includes('n')) {
      numerator++
    } else if (stringArray[i].includes('o')) {
      numerator++
    } else if (stringArray[i].includes('p')) {
      numerator++
    } else if (stringArray[i].includes('q')) {
      numerator++
    } else if (stringArray[i].includes('r')) {
      numerator++
    } else if (stringArray[i].includes('s')) {
      numerator++
    } else if (stringArray[i].includes('t')) {
      numerator++
    } else if (stringArray[i].includes('u')) {
      numerator++
    } else if (stringArray[i].includes('v')) {
      numerator++
    } else if (stringArray[i].includes('w')) {
      numerator++
    } else if (stringArray[i].includes('x')) {
      numerator++
    } else if (stringArray[i].includes('y')) {
      numerator++
    } else if (stringArray[i].includes('z')) {
      numerator++
    } 
  }
  return numerator.toString() + '/' + length.toString()
}

console.log(printErrors('abc'))
