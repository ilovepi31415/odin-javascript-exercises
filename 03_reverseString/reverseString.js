const reverseString = function(message) {
    let reveresedMessage = '';
    const length = message.length;
    for (i = 0; i < length; i++) {
        reveresedMessage += message[length - 1 - i];
    }
    return reveresedMessage;
};

// Do not edit below this line
module.exports = reverseString;
