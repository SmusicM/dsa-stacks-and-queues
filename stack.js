/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    //creates new node 
     const newNode = new Node(val)
     //if no nodes than make this one first and last since its the only
     if(!this.first){
      this.first=newNode
      this.last = newNode
     }
     //points the first node to be the new node
     this.first=newNode
     //increases size variable 
     this.size++
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    //assings the first nodes value to valRemoved
     const valRemoved = this.first.val;
     //if first node exist than decrease size
      if(this.first){
        //this.first == null
        this.size--
      }
      //retrun value of popped node
      return valRemoved
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    //returns value of first node
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    //if no nodes at first or last
    if(!this.first&&!this.last){
      return true
    }else{
      return false
    }
  }
}

module.exports = Stack;
