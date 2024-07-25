class Node{
    constructor(val){
     this.val = val;
     this.next = null;
    }
 }
 class Stack{
    constructor(){
       this.first = null
       this.size = 0
    }

    push(val){
        //new node with val
        const newNode = new Node(val)
        //if no first this is first
        if(!this.first){
            this.first = newNode;

        }else{
            //else the newnode is added to beggining
            newNode.next = this.first
            this.first = newNode
        }
        //increments size
        return this.size++
    }

    pop() {
         if(!this.first){
            return null
         }
         //this were popping
         const temp = this.first
         this.first = this.first.next
         //decrement size since were popping
         this.size--
         //reutrn val of popped node
         return temp.val
      }

    isEmpty(){
        return this.size===0
    }
 }
//takes an expression
 function calc(exp){
  const stack = new Stack()
  //splits and reveres for traversing 
  const chars = exp.split(' ').reverse()
  for(let char of chars){
    if(!isNaN(char)){
        stack.push(Number(char))

    }else{
        // a and b represent the numbers pushed to stack
        const a = stack.pop()
        const b = stack.pop()
        let result
        //function based off different characters of operation
        if(char==='+'){
            result = a+b
        }
        else if(char==='-'){
           result = a-b
        }
        else if(char==='*'){
            result = a*b
        }
        else if(char==='/'){
            result = a/b
        }
        //answer
        stack.push(result)
        console.log(result)
    }
  }
  console.log(stack)
  //gets final result
  return stack.pop()
 }
 module.exports = calc