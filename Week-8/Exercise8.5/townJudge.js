const townJudge = (n, trustArray) => {

  let iliked = {}
  let beingLiked = {}

  for (let i = 1; i <= n; i++) {
    iliked[i] = 0
    beingLiked[i] = 0
  }

  for (let data of trustArray) {
    iliked[data[0]]++
    beingLiked[data[1]]++
  }

  let judge = 0
  for (key in iliked) {
    if (iliked[key] === 0) {
      judge = key
    }
  }

  if (beingLiked[judge] === n - 1) {
    return judge
  }
  return -1

}

console.log(townJudge(2, [[1, 2]]))
console.log(townJudge(3, [[1, 3], [2, 3]]))
console.log(townJudge(3, [[1, 3], [2, 3], [3, 1]]))

/**
 * Time Complexity - O(n) (As we are iterating over array only once)
 * Space Complexity - O(n) (As we are using map data structure)
 */

