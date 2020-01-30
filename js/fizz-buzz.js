'use strict';
// FizzBuzz
let N = 50;
for (let i = 1; i <= N; i++){
    if ( i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
        continue;
    }
    if ( i % 3 == 0 ) console.log('Fizz');
    else if ( (i % 5 == 0)) console.log('Buzz');
        else console.log(i);
}