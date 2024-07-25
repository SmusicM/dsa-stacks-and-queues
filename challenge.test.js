const Stack2 = require('./challenge')
let stack2;
beforeEach(function() {
    stack2 = new Stack2();
  });

  describe("stringReversal", function() {
    it("reverses string", function() {
        
        const revgoofystr = "yeh"
        
      expect(stack2.stringReversal("hey")).toBe(revgoofystr)
    });
  });