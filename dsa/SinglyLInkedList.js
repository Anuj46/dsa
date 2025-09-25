// A data structure that contains a head, tail and length property.
// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.

// Linked Lists :-
// - Do not have indexes!
// - Connected via nodes with a next pointer
// - Random access is not allowed

// Arrays
// - Indexed in order!
// - Insertion and deletion can be expensive
// - Can quickly be accessed at a specific index

// Push in SLinkedList
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// Increment the length by one
// Return the linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("Hello");
console.log(list.push("hi"));
