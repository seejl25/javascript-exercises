const sumAll = function(arg1, arg2) {
    let finalSum = 0;
    if (typeof arg1 !== "number" || arg1%1!==0 || typeof arg2 != "number" || arg2%1 !==0) {
        return "ERROR";
    }
    if (arg1 <0 || arg2 <0) {
        return "ERROR";
    }
    for (let i = Math.min(arg1,arg2); i <= Math.max(arg1,arg2); i++) {
        finalSum += i;
    }
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
