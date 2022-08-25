const threeSumClosest = (arr, val) => {
  
  let closestSum = arr[0] + arr[1] + arr[arr.length-1]
  arr.sort((a,b) => a-b)
    
  for(i=0; i<arr.length-2;i++) {
   
    let x = i+1
    let y = arr.length - 1
    
    while (x < y) {
      let currentSum = arr[i] + arr[x] + arr[y]
      
      if (currentSum > closestSum) {
        y--
      } else {
        x++
      }
      
      if (Math.abs(currentSum - val) < Math.abs(closestSum - val)) {
        closestSum = currentSum
      }
      
    }
    
  }
  
  return closestSum
  
}

console.log(threeSumClosest([-1,2,1,-4],1))
console.log(threeSumClosest([-1,3,1,-4,1],1))