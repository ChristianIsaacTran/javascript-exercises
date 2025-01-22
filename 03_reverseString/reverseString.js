const reverseString = function(inputWord) {
    
    let wordArray = inputWord.split("");
    let reversedWordArray = wordArray.reverse();
    let reversedWord = reversedWordArray.join("");

    return reversedWord;

};

// Do not edit below this line
module.exports = reverseString;

