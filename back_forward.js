
  class Stack{
    constructor(){
       this.stacks = []
     
    }

    push(val) {
        this.stacks.push(val)
      }
    
    pop() {
       return this.stacks.pop()
    }
    peek(){
        return this.stacks[this.stacks.length -1]
    }
    
  }


  /** Stack: chained-together nodes where you can
   *  remove from the top or add to the top. */
  
  class BrowserBackForward {
    constructor() {
      this.backStack = new Stack
      this.frontStack = new Stack
      this.first = null;
      
    }
  
    visitWebsite(url){
        if(this.first!==null){
            this.backStack.push(this.first)
        }
        this.frontStack = new Stack
        this.first = url
        
    }

    goBack(){
        if(this.backStack.length === 0){
            console.log("No site to go back to")
        }
        this.frontStack.push(this.first)
        this.first = this.backStack.pop()
    }
   
    goForward(){
        if(this.backStack.length === 0){
            console.log("No site to go forward to")
        }
        this.backStack.push(this.first)
        this.first = this.backStack.pop()
    }

}
  
  module.exports = Stack;
  module.exports = BrowserBackForward
  