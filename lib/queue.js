// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        let node = new Node(val);
        if(this.length==0) {
            this.front=node;
            this.back=node;
        } else {
            this.back.next = node;
            this.back = node;

        }
        this.length++;
        return this.length;
    }

    dequeue() {
        if (this.length ==0) {
            return null;
        }
        let frontNode = this.front;
        if (this.length == 1) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }

        this.length --;
        return frontNode.value;
    }

    size() {
        return this.length;
    }
}

let nodes = new Queue();
nodes.enqueue(1);
nodes.enqueue(2);
nodes.enqueue(3);
console.log(nodes)


exports.Node = Node;
exports.Queue = Queue;