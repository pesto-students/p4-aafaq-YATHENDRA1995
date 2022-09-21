class Node {

  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

}

class Queue {

  constructor() {
    this.items = []
  }

  enqueue(data) {
    if (data) {
      this.items.push(data)
    }
  }

  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift()
    }
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

}


const levelOrderTraversal = (root) => {

  const result = []
  let current = root
  let queue = new Queue()
  queue.enqueue(current)
  
  while (!queue.isEmpty()) {
    const currentLevel = []
    const currentQueueLength = queue.size()
    
    for (let i = 0; i < currentQueueLength; i++) {
      current = queue.dequeue()
      currentLevel.push(current.data)
      if (current.left && current.left.data !== null) {
        queue.enqueue(current.left)
      }
      if (current.right && current.right.data !== null) {
        queue.enqueue(current.right)
      } 
    }
    result.push(currentLevel)
    
  }

  return result
}

const createTree = (arr) => {
  return insertIntoTree(arr, 0)
}

const insertIntoTree = (arr, i) => {

  let curr = null
  if (i < arr.length) {
    curr = new Node(arr[i])
    curr.left = insertIntoTree(arr, (2 * i + 1))
    curr.right = insertIntoTree(arr, (2 * i + 2))
  }
  return curr

}

let root1 = createTree([1])
let root2 = createTree([3, 9, 20, null, null, 15, 7])
let root3 = createTree([])

console.log(levelOrderTraversal(root1))
console.log(levelOrderTraversal(root2))
console.log(levelOrderTraversal(root3))

/**
 * Time Complexity - O(n) (As we are traversing through each element)
 * Space Complexity - O(n) (As we are using new Queue)
 */

// UnUsed Code
// let root = new Node(3)
// root.left = new Node(1)
// root.right = new Node(5)
// root.left.left = new Node(0)
// root.right.right = new Node(9)

// console.log(levelOrderTraversal(root))

// const queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())

