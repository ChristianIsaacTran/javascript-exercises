const fibonacci = function(fibNum) {
    //in this scenario we are starting with fib sequence 1,1
    let arr = [1,1];

    //Check if fibNum is 0 since we do not start at 0, or negative numbers:
    if(fibNum == 0){
        return 0;
    }
    else if(fibNum < 0){
        return "OOPS";
    }
    
    //Create fibonacci sequence up to the set amount
    for(let i = 0; i < fibNum; i++){
        console.log(`${arr[i] + arr[i+1]} iteration: ${i}`);
        arr.push(arr[i] + arr[i+1]);
    }

    console.log(arr);

    return arr[fibNum - 1]; //-1 because the fibNum index is one above the starting (arrays start at 0)

};


/*
fibonacci is a recursive concept?
8 -> 5 -> 3 -> 2 -> 1 -> 1

1. generate fibbonacci sequence based off of the given number going down
2. check if == 0, then continue since it cannot start at 0, start at 1
3. when starting sequence at 1, 1, make sure to iterate through the array i and i+1
*/


// Do not edit below this line
module.exports = fibonacci;
