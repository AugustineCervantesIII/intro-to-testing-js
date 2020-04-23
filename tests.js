// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function () {
    it('Should be a defined function.', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('Should return a string when called.', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('Should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello()).toBe("Hello, Jane!");
    });
    it('Should return "Hello, Alex!" when executed', function () {
        expect(typeof sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('Should return "Hello, Pat!" when executed.', function() {
        expect(typeof sayHello("Pat!")).toBe("Hello, Pat!");

    })
});
// describe("isNumeric", function(){
//    it('should be a defined function', function(){
//        expect(typeof isNumeric).toBe('function');
//    })
//     it('should return a boolean value when called', function(){
//         expect(typeof isNumeric()).toBe('boolean');
//     })
//     it('should return true when passed the number 5', function(){
//         expect(isNumeric(5)).toBe(true);
//     })
//     it("should return false when passed the string 'Jim Henson'", function(){
//         expect(isNumeric("Jim Henson")).toBe(false);
//     })
//
// });
