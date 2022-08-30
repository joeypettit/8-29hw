console.log('THIS IS js120');


let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10,11,12];

function addFirstLast(array){
    let sum = array[0] + array[array.length-1];
    return sum;
}

console.log(`Example 1: ${addFirstLast(array1)}`);
console.log(`Example 2: ${addFirstLast(array2)}`);



console.log(" ");