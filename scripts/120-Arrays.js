console.log('THIS IS js120');

let arr = ["ASDF", "BLAH", "Oh!", "Hi", "There!"];

function loopsArrEtc(array, num){
    let finishedString ="";
    for( let i = num; i < array.length; i++){
        finishedString += array[i];
        finishedString += " ";
    }
    return finishedString;
    
}

console.log('Example 1:', loopsArrEtc(arr, 3));
console.log('Example 2:', loopsArrEtc(arr, 2));
