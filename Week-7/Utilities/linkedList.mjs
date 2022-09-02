class Node {

  constructor(data, next = null) {
    this.data = data
    this.next = next
  }

}

class LinkedList {

  constructor() {
    this.head = null
  }

  appendNode(newNode) {

    let node = this.head;
    if (node == null) {
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;

  }

  insertAt(index, newNode) {

    let node = this.head;
    if (index === 0) {
      newNode.next = node;
      this.head = newNode;
      return;
    }
    while (--index) {
      if (node.next !== null)
        node = node.next;
      else
        throw Error("Index Out of Bound");
    }
    let tempVal = node.next;
    node.next = newNode;
    newNode.next = tempVal;

  }

  removeFrom(index) {

    let node = this.head;
    if (index === 0) {
      if (node !== null) {
        node = node.next;
        this.head = node;
      }
      else
        throw Error("Index Out of Bound");

      return;
    }
    while (--index) {
      if (node.next !== null)
        node = node.next;
      else
        throw Error("Index Out of Bound");
    }
    node.next = node.next.next;

  }

  getNode(index) {

    let node = this.head;
    if (index == 0) {
      return this.head;
    }
    while (index--) {
      if (node.next !== null)
        node = node.next;
      else
        throw Error("Index Out of Bound");
    }
    return node;

  }

  clear() {
    this.head = null;
  }

  isEmpty() {
    return (this.head == null)
  }

  listSize() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  printList() {

    let node = this.head
    if (this.head === null) {
      console.log("Empty Linked List")
    } else {
      while(node.next !== null) {
        console.log(node.data)
        node = node.next
      } 
      console.log(node.data)
    }
    
  }

  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    if (currentNode === null) return;

    let nextNode;
    while (currentNode) {
      nextNode = currentNode.next;

      currentNode.next = prevNode;
      prevNode = currentNode;

      currentNode = nextNode;
    }
    this.head = prevNode;
  }

  rotate(k) {
    let previousHead = this.head
    let previous = this.head
    let current = this.head

    let i = 1;
    while (current.next) {
      if (i === k + 1) {
        this.head = current;
        previous.next = null;
      }

      previous = current;
      current = current.next;
      i++;
    }
    current.next = previousHead;
  }

  detectLoop() {

    let low = this.head
    let high = this.head

    while(high !== null && high.next !== null) {
      low = low.next
      high = high.next.next
      if (low.next === high.next) {
        return true
      }
    }
    return false
    
  }

}

export { LinkedList, Node }