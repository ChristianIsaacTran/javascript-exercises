const sumAll = function(start, end) {
    if(start > end){
        let startTemp = start;
        let endTemp = end;

        end = startTemp;
        start = endTemp;
    }
    if(start < 0 || end < 0 || typeof start != "number" || typeof end != "number" || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    }

    let total = 0;

    for(let i = start; i <= end; i++){
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
