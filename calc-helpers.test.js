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
        const testArr = [3,4,5,6]
        expect(calcs.arrayMean(testArr)).toStrictEqual(4.5)
    })
})