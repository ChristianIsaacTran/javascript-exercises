/*
check if current index matches the last index, until we get to the middle.
if all matches on both ends, return true. Otherwise, false.
*/

const palindromes = function (word) {

    let spreadWord = [...word.toLowerCase()]; //separate word into individual letters
    let isPalindrome = true;

    //Filter out the special characters/punctuation and whitespace.
    let filteredWord = spreadWord.filter((char) => {
        if(char === "." || char === "," || char === " " || char === "!" || char === ";"){
            return false;
        }
        return true;
    });

    console.log(filteredWord);
    //Uses .length to compare the letters with the letters on the opposite ends.
    //If any of the ends do NOT match, it is not considered a palindrome.
    for(let i = 0; i < filteredWord.length/2; i++){
        if(filteredWord[i] != filteredWord[filteredWord.length - i - 1]){
            isPalindrome = false;
        }
    }

    return isPalindrome;

    //i = 0; length = 7 - i (0) - 1 = 6
    //i = 1; length = 7 - i (1) - 1 = 5
    //i = 2; length = 7 - i (2) - 1 = 4


};

// Do not edit below this line
module.exports = palindromes;
