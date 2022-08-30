console.log('THIS IS js150');


arrayOfArrays1 = [ [1, 2], [3, 4, 5] ];
arrayOfArrays2 = [ [1, 2], [3, 4, 5], [6] ];


function addAllNumbers(arrOfArr){
    let sum = 0;

    for(let item =0; item<arrOfArr.length; item++){
        let nestedArray = arrOfArr[item];
        
         for(let index = 0; index<nestedArray.length; index++){
            sum += nestedArray[index];
        }
    }

    return sum;
}


console.log(`Example 1: ${addAllNumbers(arrayOfArrays1)}`);
console.log(`Example 2: ${addAllNumbers(arrayOfArrays2)}`);