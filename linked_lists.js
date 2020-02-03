// Like an array, but composed of nodes which each know where the next one is

class LinkedList {
  constructor(head){
    // head is a node
    this.head = head
    this.tail = head
  }

  push(value){
    const newNode = new Node(value)
    this.tail.next = newNode

    this.tail = newNode
  }

  // remove node
  // iterate over entire linked list
  // push, shift, unshift, pop
  // length
  // find
}