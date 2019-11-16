class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new LinkedListNode(10);
head.next = new LinkedListNode(90);
head.next.next = new LinkedListNode(31);
console.log(head);
