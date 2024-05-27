class CalcError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}

/** takes in a string separated by commas or another separator
 * returns an array of numbers, or throws an error if not given a 
 * */
function stringToNumericArray(str, sep=',') {
    if (!str) {
        throw new CalcError()
    }
    const nums = str.split(sep);
    if (nums.some(isNaN)) {
        throw new CalcError(nums.find(isNaN))
    }
    return nums.map(parseFloat)
}

// takes an array of numbers and returns the mean
function arrayMean(arr) {
    let sum = 0;
    for (i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum/arr.length
}

// return the median of an array of numbers
function arrayMedian(arr) {
    const sortedArr = arr.sort((a,b) => a-b);
    const len = sortedArr.length;
    if (len % 2) {
        return sortedArr[Math.floor(len/2)]
    }
    else {
        return (sortedArr[len/2] + sortedArr[len/2 - 1])/2
    }
}

// iterates over an array and returns an object showing how many times elements
// repeat in the given array.
function countEls(arr) {
    const counter = {}
    for (let i = 0; i < arr.length; i++) {
        if (!counter[arr[i]]) {
            counter[arr[i]] = 1;
        }
        else {
            counter[arr[i]]++;
        }
    }
    return counter
}

// uses countEls above to find the mode of an array
function arrayMode(arr) {
    const counter = countEls(arr);
    let mostFound = 0;
    let mostKey;
    for(const [key, value] of Object.entries(counter)) {
        if (value > mostFound) {
            mostFound = value;
            mostKey = [key];
        }
        if (value == mostFound && key != mostKey) {
            mostKey.push(key)
        }
    }
    return mostKey.sort((a,b) => a-b);
}

module.exports = {CalcError, stringToNumericArray, arrayMean, arrayMedian, arrayMode}