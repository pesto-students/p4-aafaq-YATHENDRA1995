const givenDifferencePair = (arr, val) => {
  
  arr.sort((a,b) => a-b)
  let i = 0
  let j = 1
  
  while(i < arr.length && j < arr.length) {
    if (arr[j] - arr[i] === val) {
      return 1
    }
    else if (arr[j] - arr[i] < val) {
      j++
    }
    else if (arr[j] - arr[i] > val) {
      i++
    }
  }
  
  return 0
  
}

console.log(givenDifferencePair([5, 10, 3, 2, 50, 80], 78))
console.log(givenDifferencePair([-10, 20], 30))