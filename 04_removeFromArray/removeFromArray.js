const removeFromArray = function(arr, ...itemsToRemove) {
    for (const item of itemsToRemove) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
