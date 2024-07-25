/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
     const newNodeVal  = new Node(val)
     //if list is empty assign the new node to first ir last since its the only one
     if(!this.first){
      this.first = newNodeVal
      this.last = newNodeVal
     }else{
     //otherwise if list is not empty assign the last to the newNode
      this.last = newNodeVal
     }
    this.size++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    //if empty (if theres no first its empty)
     if(this.first == null){
       console.log("queue is empty at dequeue")
       throw new Error("EMPTY QUEUEEEEEE")
     }

     console.log("Node to be removed at this.first at dequeue",this.first)

     //assigned to const just for extra clarity
     const valRemoved = this.first.val;
  
     //removes first , constructor already has it to null this is visual
     this.first.val == null
     
     //this.first will be null when calling it like this becasue contrcutor
     //if first is null last is null , because it keeps our linked list updated and its like a line of people waiting you have to remove from last when first is removed
     if(this.first==null){
      this.last == null
      
     }
     //decreases size 
     this.size--
     
      console.log("Value removed at dequeue",valRemoved)
     console.log(this.first.val)
    
     //returns val of removed at this.first
     return valRemoved
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    //returs first's value
      return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.first==null&&this.last==null){
      return true
    }else{
      return false
    }
  }
}

module.exports = Queue;
