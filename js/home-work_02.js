/*1. Написать функцию rane, принимающую два оябязательных аргумента, 
начало и коне диапазона, и возвращающую массив, который содержит все числа
из него, включая начальное и конечное.
Написать функцию sum, принимающую массив чисел и возвращающую их сумму.
*/
const range = function(start, end, step = 1) {
    let arr = [];
    let j = 0;

    if ( step > 0) {
        for (let i = start; i <= end; i += step){
            arr[j++] = i;
        }
    } else {
        for (let i = start; i >= end; i += step){
            arr[j++] = i;
        }  
    }
    return arr;
}

const sum = function(arr) {
    let result = 0;
    for (let value of arr) result += value;

    return result;
}

/*let mas = range(5, 1, -1);
console.log(mas);
console.log(sum (mas));
*/
// -----------------------------------------------------

/*3. Написать функции:
 reverseArray(arr) принимающую в качестве аргумента массив и выводит новый, 
с обратным порядком элементов.
reverseArrayInPlace(arr) - меняет в текущем массиве порядок элементов на обратный
*/

const reverseArray = function(arr) {
    let len = arr.length;
    let reversArray = [];
    let j = 0;
    for (let i = len-1; i >= 0; i--) {
        reversArray[j++] = arr[i];
    }
    return reversArray;   
};

const reverseArrayInPlace = function(arr) {
    let len = arr.length;
    let tmp;
    for (let i = 0; i <= parseInt(len / 2); i++) {
        // console.log('arr[' + i + '] - '+arr[i]);
        tmp = arr[i];
        arr[i] = arr[len-1-i];
        arr[len-1-i] = tmp;
    }
    return arr;   
};

let oldArray = [3,4, 5, 6, 7];
console.log(oldArray);
// console.log(reverseArray(oldArray));
reverseArrayInPlace(oldArray);
console.log(oldArray);