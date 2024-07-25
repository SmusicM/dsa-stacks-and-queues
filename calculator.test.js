const calc = require('./calculator')

describe("calc",function(){
    it("can correctly calculate with inputed polish expression",function(){
        expect(calc("+ 1 2")).toBe(3)
    })
    it('can correctly calculate more complex expressions',function(){
        expect(calc("* 2 + 1 2")).toBe(6)
    })
    it("can correctly calculate more complex expressions using mult and add",function(){
        expect(calc("+ 9 * 2 3")).toBe(15)
    })
    it("can correctly use subtraction",function(){
        expect(calc("- 1 2")).toBe(-1)
    })
    it("can correctly calculate expressions with sub and division",function(){
        expect(calc("/ 6 - 4 2") ).toBe(3)
    })
    it("can correctly calculate multiplcation and subtraction",function(){
        expect(calc("- 9 * 2 3")).toBe(3)
    })
})
