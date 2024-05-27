const calcs = require("./calc-helpers")

describe("tests for the string parser", function() {
    test("errors if there's no string", function() {
        expect(() => {calcs.stringToNumericArray()}).toThrow(calcs.CalcError)
    })
    test("errors non-numeric strings with a message", function() {
        expect(() => calcs.stringToNumericArray("NaN")).toThrow(calcs.CalcError)
        expect(() => calcs.stringToNumericArray("NaN")).toThrow("NaN")
    })
    test("returns an array of numbers", function() {
        const testArr = calcs.stringToNumericArray("1");
        expect(testArr).toBeInstanceOf(Array)
        expect(testArr[0]).toStrictEqual(1)
    })
})

describe("tests for the mean calculator", function() {
    test("returns the mean of an array", function() {
        const testArr = [3,4,5,6];
        expect(calcs.arrayMean(testArr)).toStrictEqual(4.5)
    })
})

describe("tests for the median calculator", function() {
    test("returns the median of an array of odd length", function() {
        const testArr = [4,5,3];
        expect(calcs.arrayMedian(testArr)).toStrictEqual(4);
    })
    test("averages the two middle values of an array of even length", function() {
        const testArr = [9,6,1,5];
        expect(calcs.arrayMedian(testArr)).toStrictEqual(5.5);
    })
})

describe("tests for the mode calculator", function() {
    test("returns an array of modes", function() {
        const testArr = [4,5,3,5];
        expect(calcs.arrayMode(testArr)).toBeInstanceOf(Array)
    })
    test("returns the single mode of an array", function() {
        const testArr = [4,5,3,5];
        expect(calcs.arrayMode(testArr)).toEqual([5])
    })
    test("returns multiple modes if they exist", function() {
        const testArr = [7,5,3,2,3,7,9,3,4,7,5]
        expect(calcs.arrayMode(testArr)).toEqual([3,7])
    })
    test("returns an empty array if no inputs repeat", function() {
        const testArr = [1,2,3,4,5,6]
        expect(calcs.arrayMode(testArr)).toEqual([])
    })
})