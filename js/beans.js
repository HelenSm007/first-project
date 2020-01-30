'use strict';
//Подсчет количества символов
/*function countBs(str){
    let len = str.length;
    let count = 0;
    for (let i = 0; i < len; i++){
        if (str.charAt(i) == 'B') count++;
    }
    return count;
}*/

function countChar(str, ch) {
    let len = str.length;
    let count = 0;
    for (let i = 0; i < len; i++){
        if (str.charAt(i) == ch) count++;
    }
    return count;  
}

// С замыканием
function giveString(str) {
    let len = str.length;
    return function (ch) {
        let count = 0;
        for (let i = 0; i < len; i++){
            if (str[i] == ch) count++;
        }
        return count;  
    }  
}
let str = "BjsahgBBBhjg";

//console.log(countChar(str, 'j'));
var searchChar = giveString(str);
console.log('Characters = ' + searchChar('j'));
console.log('Characters = ' + searchChar('B'));