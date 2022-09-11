class Node {

  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

}

const isBST = (root) => {

  if (root === null) {
    return true
  }
  if (root.left !== null && root.left.data > root.data) {
    return false
  }
  if (root.right !== null && root.right.data < root.data) {
    return false
  }
  if (!isBST(root.left) || !isBST(root.right)) {
    return false
  }

  return true

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

let root1 = createTree([2, 1, 3])
let root2 = createTree([5, 1, 4, null, null, 3, 6])

console.log(isBST(root1))
console.log(isBST(root2))

/**
 * Time Complexity - O(n) (As we are traversing through all nodes)
 * Space Complexity - O(n) (As n stacks get's created in worst case)
 */


// Un Used Code
// let root = new Node(3)
// root.left = new Node(1)
// root.right = new Node(5)
// root.left.left = new Node(0)
// root.right.right = new Node(9)

// console.log(isBST(root))