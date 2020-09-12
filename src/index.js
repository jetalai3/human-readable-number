module.exports = function toReadable (number) {
    let numbers = { 0: 'zero', 1:'one', 2:'two', 3:'three',  4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
    10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen',
    18:'eighteen', 19:'nineteen', 20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy',
    80:'eighty', 90:'ninety' };
    let readableArray = []
    number = number.toString();
    if (number.length === 3) {
        readableArray.push(numbers[number[0]] + ' hundred');
        number = number.slice(1);
    }
    if (number === '00') return readableArray.join(' ');
    if (numbers[number]) {
        readableArray.push(numbers[number]);
        return readableArray.join(' ');
    }
    if (number[0] === '0') number = number.slice(1);
    if (number.length === 2 && number[0] !== '0') {
        readableArray.push(numbers[number[0]*10]);
        number = number.slice(1);
    }
    readableArray.push(numbers[number[0]]);

    return readableArray.join(' ');
}
