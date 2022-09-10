import { LinkedList, Node } from '../Utilities/linkedList.mjs'

let list = new LinkedList()

list.appendNode(new Node(1))
list.appendNode(new Node(2))
list.appendNode(new Node(3))
list.appendNode(new Node(4))
list.appendNode(new Node(5))

console.log('-----Before reversal-----')
list.printList()
console.log('-----After reversal-----')
list.reverse()
list.printList()

/**
 * Space Complexity - O(1)
 * Time Complexity - O(N) (As we are traversing through entire list)
 */
