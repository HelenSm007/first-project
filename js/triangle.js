'use strict';
// Triangle in a loop
let n = 7;
for (let i = 1; i <= n; i++){
    let str = "#";
    for (let j = 1; j < i; j++){
        str = str +'#';
    }

    console.log(str);
}