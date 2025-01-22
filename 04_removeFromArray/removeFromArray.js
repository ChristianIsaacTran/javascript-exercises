const removeFromArray = function (numArray, ...removeArray) {
    // The second parameter is an array of indenfinite arguments written in rest parameter format. Works just like an array.
    let changedArray = [];

    //Note, using for...of is different from for...in
    //Use for...of to iterate through the objects
    for(const num of numArray){
        if(!(removeArray.includes(num))){
            changedArray.push(num);
        }
    }

    return changedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
