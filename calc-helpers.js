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
    nums.forEach(parseFloat)
    return nums
}