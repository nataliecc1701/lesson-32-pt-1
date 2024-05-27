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
    return nums
}

// takes an array of numbers and returns the mean
function arrayMean(arr) {
    let sum = 0;
    for (i=0; i<arr.length; i++) {
        sum += parseFloat(arr[i])
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

module.exports = {stringToNumericArray, arrayMean, arrayMedian}