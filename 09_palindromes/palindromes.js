const palindromes = function (s) {
    let arr = [];
    for (i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            arr.push(s[i].toLowerCase());
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != arr[arr.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
