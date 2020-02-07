/*1. Написать функцию range, принимающую два обязательных аргумента, 
начало и конеw диапазона, и возвращающую массив, который содержит все числа
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
};

const sum = function(arr) {
    let result = 0;
    for (let value of arr) result += value;

    return result;
};

/*let mas = range(5, 1, -1);
console.log(mas);
console.log(sum (mas));
*/
// -----------------------------------------------------
// 2. Глубокое сравнение объектов




// -----------------------------------------------------

/*3. Написать функции:
 reverseArray(arr) принимающую в качестве аргумента массив и выводит новый, 
с обратным порядком элементов.
reverseArrayInPlace(arr) - меняет в текущем массиве порядок элементов на обратный
*/

const reverseArray = function(arr) {
    let len = arr.length,
        reversArray = [],
        j = 0;

    for (let i = len-1; i >= 0; i--) {
        reversArray[j++] = arr[i];
    }

    return reversArray;   
};

const reverseArrayInPlace = function(arr) {
    let len = arr.length,
        tmp = '',
        limit = parseInt(len / 2);

    for (let i = 0; i < limit; i++) {
        // console.log('i = '+ i);
        tmp = arr[i];
        arr[i] = arr[len-1-i];
        arr[len-1-i] = tmp;
    }

    return arr;   
};

/*let oldArray = [3,4, 5, 6, 7];
console.log(oldArray);
// console.log(reverseArray(oldArray));
reverseArrayInPlace(oldArray);
console.log(oldArray);
*/

// ------------------------------------------
/* Векторный тип
*/
const Vector  = function(x, y) {
    this.x = x;
    this.y = y;
};

Vector.prototype.plus = function (Vector) {
    let newVector = { };
    newVector.x = this.x + Vector.x;
    newVector.y = this.y + Vector.y;
    return newVector;

};

Vector.prototype.minus = function (Vector) {
    let newVector = { };
    newVector.x = this.x - Vector.x;
    newVector.y = this.y - Vector.y;
    return newVector;

};

let vec = new Vector(10,2);
console.log(vec);
console.log(vec.plus(new Vector(2, 3)));
console.log(vec.minus(new Vector(2, 3)));

// ---------------------------------