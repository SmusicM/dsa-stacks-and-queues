class Node{
    constructor(val){
     this.val = val;
     this.next = null;
    }
 }

class Stack{
    constructor(){
       this.first = null
     
    }

    push(val) {
        //creates new node 
        const newNode = new Node(val)
        //points the next node to be this.first
        newNode.next = this.first
        //than actually sets it to first
        this.first=newNode
      }
    
    pop() {
        
        if(!this.first){
           //throw new Error("no stack!!!!")
           return null
         }
         const valRemoved = this.first.val;
         //points this first to be the next aka to the right
         this.first = this.first.next
         return valRemoved
    }
    

      isEmpty() {
        //if no nodes at first or last
        return this.first===null
      }

    


  }

   

 function balancedbrackets(str){
    const newStack = new Stack(str)
    //valid brackets object
    const brackets = {
     ")":"(",
     "}":"{",
     "]":"[",
    }

    for(let character of str){
     //if(brackets[character]){
     //    newStack.push(character)
     //    return true
     if(['(','{','['].includes(character)){
     //if(brackets[character]){
         newStack.push(character)
         return true
     }else if([')','}',']'].includes(character)){
        const first = newStack.pop()
         if(first !== brackets[character]){
            console.log(character)
            
             return false 
         }
       
     }
   
    }
   return newStack.isEmpty()
 }


  module.exports ={Stack,balancedbrackets,Node}