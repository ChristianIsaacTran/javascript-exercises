const repeatString = function (word, repeatNum) {

    let inputWord = "";

    if (repeatNum > 0) {
        inputWord = word;
        for (let i = 1; i < repeatNum; i++) {
            inputWord += word;
        }
    }
    else if(repeatNum < 0){
        return "ERROR"
    }

    return inputWord;
};

// Do not edit below this line
module.exports = repeatString;
