import Stack from '../Utilities/stack.mjs'

class Queue {

  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }

  enqueue(data) {
    this.stack1.push(data)
  }

  dequeue() {
    
    if (this.stack1.size === 0 && this.stack2.size === 0) {
      return -1
    } else {
      
      while(!this.stack1.isEmpty())  {
        this.stack2.push(this.stack1.pop())  
      }
      const item = this.stack2.pop()
      while(!this.stack2.isEmpty())  {
        this.stack1.push(this.stack2.pop())  
      }
      return item
      
    }
    
  }
  
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

/**
 * Space Compltexity - O(1) (As there are no loops)
 * Time Compltexity - O(1) for push and O(N) for pop 
 */


