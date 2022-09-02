import { LinkedList, Node } from '../Utilities/linkedList.mjs'

let list1 = new LinkedList()
let list2 = new LinkedList()

list1.appendNode(new Node(1))
list1.appendNode(new Node(2))
list1.appendNode(new Node(3))
list1.appendNode(new Node(4))
list1.appendNode(new Node(5))

list2.appendNode(new Node(1))
list2.appendNode(new Node(2))
list2.appendNode(new Node(3))
list2.appendNode(new Node(4))
list2.appendNode(new Node(5))

console.log('-----Before rotation List 1-----')
list1.printList()
console.log('-----After rotation List1-----')
list1.rotate(2)
list1.printList()

console.log('-----Before rotation List 2-----')
list2.printList()
console.log('-----After rotation List2-----')
list2.rotate(3)
list2.printList()

/**
 * Space Complexity - O(1)
 * Time Complexity - O(N) (As we are traversing through entire array)
 */
