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
    it('Should return the string "Hello, Jane!" when executed.', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('Should also return "Hello, Alex!" when executed.', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('Should also return "Hello, Pat!" when executed.', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it('Should return "Hello, World!" when executed.', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('Should be a defined function.', function () {
        expect(typeof isFive).toBe('function');
    });
    it('Should return any input as a boolean.', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('Should return true when 5 is passed.', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('Should return true when "5" is passed.', function () {
        expect(typeof isFive()).toBe('boolean');
    });
});

describe("isEven", function () {
    it('Should be a defined function.', function () {
        expect(typeof isEven).toBe('function');
    });
    it('Should return any input as a boolean.', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('Should return true when 2 is executed.', function () {
        expect(isEven(2)).toBe(true);
    });
    it('Should return true when -4 is executed.', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('Should return false when 3 is executed.', function () {
        expect(isEven(3)).toBe(false);
    });
    it('Should return false when banana is executed.', function () {
        expect(isEven('banana')).toBe(false);
    });
    it('Should return true when 8 is executed.', function () {
        expect(isEven(8)).toBe(true);
    });
    it('Should return false when Infinity is executed.', function () {
        expect(isEven('infinity')).toBe(false);
    });
    it('Should return false when true is executed.', function () {
        expect(isEven(true)).toBe(false);
    });
    it('Should return false when false is executed.', function () {
        expect(isEven(false)).toBe(false);
    });
    it('Should return false when an argument is not passed through', function () {
        expect(isEven()).toBe(false);
    });
})

describe("isVowel", function () {
    it('Should be a defined function.', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('Should always return a boolean value.', function () {
        expect(typeof isVowel).toBe('boolean');
    });
    it('should return true when "a" is executed.', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('Should return true when "A" is executed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('Should return false when "y" is executed.', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('Should return false when 4 is executed.', function () {
        expect(isVowel(4)).toBe(false);
    });
})

describe("add", function () {
    it('Should be a defined function.', function () {
        expect(typeof add).toBe('function');
    });
    it('Should return 5 when 2 and 3 are passed.', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when -3 and -9 are passed.', function () {
        expect(add(-3, -9)).toBe(-12)
    });
    it('Should return 11 when "5" and 6 are passed.', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('Should return 6 when "-4" and "10" are passed.', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('Should return NaN when "banana" and "split" are passed.', function () {
        expect(add("banana", "split")).toBe(NaN);
    });
    it('Should return NaN when nothing is passed.', function () {
        expect(isNaN(add())).toBe(NaN);
    });
})
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
