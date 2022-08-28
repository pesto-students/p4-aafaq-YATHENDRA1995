const countingSort = (arr) => {
  
  let low = 0
  let mid = 0
  let high = arr.length - 1
  let temp
  
  while(mid <= high) {
    
    if (arr[mid] === 0) {
      temp = arr[low]
      arr[low] = arr[mid]
      arr[mid] = temp
      low++
      mid++
    }
    
    else if (arr[mid] === 1) {
      mid++
    }
    
    else if (arr[mid] === 2) {
      temp = arr[mid]
      arr[mid] = arr[high]
      arr[high] = temp
      high--
    }
    
  }
  
  return arr
  
}

console.log(countingSort([0, 1, 2, 2, 1, 0, 1]))
console.log(countingSort([2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0]))

/**
 * Space Complexity - O(1) (As we are not using any extra spaces which is dependent on N)
 * Time Complexity - O(N) (As we are traversing through the entire array once)
 */