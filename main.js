
let string = 'Hello man'
let string2 = 'hello there.'

function reverse(input) {
  const split = input.split(' ').reverse().join(' ')
  return split
}

console.log(reverse(string))
console.log(reverse(string2))
