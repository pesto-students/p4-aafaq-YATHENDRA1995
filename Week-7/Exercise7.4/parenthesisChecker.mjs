import Stack from '../Utilities/stack.mjs'

const parenthesisChecker = (str) => {

  const stack = new Stack()

  if (str.length === 0) return false

  for (let i = 0; i < str.length; i++) {

    if (str[i] === '{' || str[i] === '[' || str[i] === '(') {
      stack.push(str[i])
      continue;
    } else if (str[i] === '}' || str[i] === ']' || str[i] === ')') {
      if (stack.isEmpty()) return false
      const temp = stack.pop()
      switch (str[i]) {
        case '}':
          if (temp === '[' || temp === '(') return false;
          break;
        case ']':
          if (temp === '{' || temp === '(') return false;
          break;
        case ')':
          if (temp === '{' || temp === '[') return false;
          break;
      }
    } else {
      return false
    }

  }

  return stack.isEmpty()

}

console.log(parenthesisChecker('{}'))
console.log(parenthesisChecker('{[()]}'))
console.log(parenthesisChecker('{'))
console.log(parenthesisChecker('abv'))
console.log(parenthesisChecker('{yathendra}'))
console.log(parenthesisChecker('{]'))
console.log(parenthesisChecker('{}[]'))

/*
  Space Complexity - O(N)
  Time Compltexity - O(N)
*/
