import { LinkedList, Node } from '../Utilities/linkedList.mjs'

let list1 = new LinkedList()
let list2 = new LinkedList()

list1.appendNode(new Node(1))
list1.appendNode(new Node(2))
list1.appendNode(new Node(3))
list1.appendNode(new Node(4))
list1.appendNode(new Node(5))

list2.appendNode(new Node(6))
list2.appendNode(new Node(7))
list2.appendNode(new Node(8))
list2.appendNode(new Node(9))
list2.appendNode(new Node(10))


console.log('Is loop present - ', list1.detectLoop())

// Create a loop for testing
let knode = list2.getNode(1);
let lnode = list2.getNode(list1.listSize() - 1);
lnode.next = knode;

console.log('Is loop present - ', list2.detectLoop())

/**
 * Space Complexity - O(1)
 * Time Complexity - O(N) (As we are traversing through entire list)
 */
