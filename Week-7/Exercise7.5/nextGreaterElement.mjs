import Stack from '../Utilities/stack.mjs'

const nextGreaterElement = (arr) => {

  const stack = new Stack()
  const newArray = []

  for (let i = 0; i < arr.length; i++) {
    newArray.push(-1)
  }

  for (let i = 0; i < arr.length; i++) {

    if (stack.isEmpty()) {
      // Pushing the index
      stack.push(i)
      continue;
    }

    if (arr[i] <= arr[stack.peek()]) {
      stack.push(i)
    } else {

      while (!stack.isEmpty() && arr[i] > arr[stack.peek()]) {
        newArray[stack.peek()] = arr[i]
        stack.pop()
      }
      stack.push(i)

    }

  }

  return newArray

}

console.log(nextGreaterElement([1, 3, 2, 4]))
console.log(nextGreaterElement([6, 8, 0, 1, 3]))

/**
 * Space Complexity - O(N) (As we are having a new array and using stack)
 * Time Complexity - O(N) (As we are iterating through all elements only once)
 */