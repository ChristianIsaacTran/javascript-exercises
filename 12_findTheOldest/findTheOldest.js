const findTheOldest = function(peopleArr) {
    const sortedAgeArr = peopleArr.sort((a,b) => {
        if((!b["yearOfDeath"]) &&  b["yearOfBirth"] < a["yearOfBirth"]){
            return -1; //-1 because "a" will go before "b" since "b" is the greater age (born in a year less than "a")
        }

        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    });

    return sortedAgeArr[sortedAgeArr.length - 1]; //In this case, the .sort() will always put the greatest age at the end, since it goes from least to greatest

};

/*
1. sort the entire object array by the person's AGE (calculated by subtracting year of death with year of birth)
2. return the person object
*/


// Do not edit below this line
module.exports = findTheOldest;
