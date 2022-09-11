class Node {

  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

}

const maxDepthTree = (root) => {

  if (root === null) {
    return 0
  } else {
    let leftTree = maxDepthTree(root.left)
    let rightTree = maxDepthTree(root.right)
    return 1 + Math.max(leftTree, rightTree)
  }

}

const createTree = (arr) => {
  return insertIntoTree(arr, 0)
}

const insertIntoTree = (arr, i) => {

  let curr = null
  if (i < arr.length) {
    curr = new Node(arr[i])
    curr.left = insertIntoTree(arr, (2*i + 1))
    curr.right = insertIntoTree(arr, (2*i + 2))
  }
  return curr
  
}

let root1 = createTree([1, null, 2])
let root2 = createTree([3, 9, 20, null, null, 15, 7])

console.log(maxDepthTree(root1))
console.log(maxDepthTree(root2))

/**
 * Space Compltexity - O(n) (Doubt)(As we are using recursive stack there may be n stacks created)
 * Time Complexity - O(n) (Recursively as we are checking all the nodes in worst case)
 */


// Un used Code

// let root = new Node(1)
// root.left = new Node(2)
// root.right = new Node(3)
// root.left.left = new Node(4)
// root.right.right = new Node(5)
// console.log(maxDepthTree(root))
