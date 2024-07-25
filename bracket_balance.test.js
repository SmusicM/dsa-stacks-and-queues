const {Stack,balancedbrackets }= require('./bracket_balance')

//let stack;
//
//beforeEach(function() {
//  stack = new Stack();
//});

describe("brackets are balanced test cases", function() {
    it("it can detect that brackets are valid and matching", function() {
        
        expect(balancedbrackets("{({hi})}")).toBe(true);
        expect(balancedbrackets("()")).toBe(true);
    });
    it("it can detect that brackets are not matching", function() {
        
        expect(balancedbrackets("hi]]")).toBe(false);
        expect(balancedbrackets("]}")).toBe(false);
        expect(balancedbrackets("](}")).toBe(false);
        expect(balancedbrackets(")))](}")).toBe(false);
        expect(balancedbrackets("){)](}")).toBe(false);
    });
});
