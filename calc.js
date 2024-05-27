const express = require("express")

const app = express();

class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}

app.get("/mean", function(request, response) {
    const ans = {operation: "mean"}
    if(!request.query.nums) {
        throw new ExpressError("missing required parameter: nums", 400)
    }
    const nums = request.query.nums.split(",");
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(isNaN(nums[i])) {
            throw new ExpressError(`${nums[i]} is not a number`, 400)
        }
        sum += parseFloat(nums[i])
    }
    ans.value = sum/nums.length
    return response.json(ans)
})

// handle errors
app.use(function(err, request, response, next) {
    const status = err.status || 500;
    const message = err.message;
    
    return response.status(status).json({
        error: {message, status}
    });
})

app.listen(3000, function(){
    console.log('App on port 3000');
}) 