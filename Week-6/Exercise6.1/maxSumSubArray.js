const maxSumSubArray = (array) => {
  
  let currentMaxSum = 0
  let globalMaxSum = 0
  
  array.map((data) => {
    currentMaxSum = Math.max(data, data + currentMaxSum)
    globalMaxSum = Math.max(globalMaxSum, currentMaxSum)
  })
  
  if (globalMaxSum === 0) return Math.max(...array)
  
  return globalMaxSum
}

console.log(maxSumSubArray([1,2,-1,4]))
console.log(maxSumSubArray([-5, 4, 6, -3, 4, -1]))
console.log(maxSumSubArray([-1, -2, -3]))

/**
 * Space Complexity - O(1) (As we didn't use any extra spaces which is dependent on N)
 * Time Complexity - O(N) (As we are iterating once through the entire loop once)
 */