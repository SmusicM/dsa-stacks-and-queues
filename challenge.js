class Node{
   constructor(val){
    this.val = val;
    this.next = null;
   }
}
class Stack2{
    constructor(){
       this.first = null;
     
    }

    push(val) {
        //creates new node 
         const newNode = new Node(val)
         //points the next node to be this.first
         newNode.next = this.first
         //than actually sets it to first
         this.first=newNode
      }
    
      /** pop(): remove the node from the top of the stack
       * and return its value. Should throw an error if the stack is empty. */
    
      pop() {
        
         const valRemoved = this.first.val;
         if(!this.first){
            throw new Error("no stack!!!!")
          }
          //points this first to be the next aka to the right
          this.first = this.first.next
          return valRemoved
      }
    
      stringReversal(str){
        const newNode = new Stack2(str)
       //loops through the length of str
         for(let i = 0;i<str.length;i++){
            //pushes str at its index to the new stack
             newNode.push(str[i])
         }
         //since we cant use arrays set empty string
          let revStr = ''
          //while new stack is first in LL 
         while(newNode.first){
            //add those characters to it that were popped because stacks are one added to first one leaves first
          revStr+=newNode.pop()
         }
         
         console.log(revStr)
         //return that reversed string
         return revStr
      }


    
}

//const goofystr = "hey"
//const rev = stringReversal(goofystr)
//console.log(rev)
module.exports = Stack2;
