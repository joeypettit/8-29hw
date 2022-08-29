console.log('THIS IS js110');

function conditional(num1, num2){
    if (num1>num2){
        return 'The first number was bigger!';
    } else if(num1<num2){
        return 'The second number was bigger!';
    }else{
        return 'The numbers are the same!';
    }
}

console.log('Example 1:', conditional(3,2));
console.log('Example 3:', conditional(2,7));
console.log('Example 2:', conditional(7,7));
