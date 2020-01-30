'use strict';
function isEven(number) {
    if (number < 0) return 'Error!';
    if (number == 1) return false;
    if (number == 0) return true;
    return isEven(number-2);
}

console.log(isEven(-1));
