console.log('THIS IS js140');


let employees = [
    {name: "Tony", yearsOfExperience: 10 },
    { name: "Carla", yearsOfExperience: 4 }
];

let otherEmployees = [
    { name: "Tony", yearsOfExperience: 10 }, 
    { name: "Carla", yearsOfExperience: 4 },
    { name: "Kris", yearsOfExperience: 14 }
];


function findTotalYears(arrayOfObjects){
    let totalYears = 0;
    for(let i = 0; i<arrayOfObjects.length; i++){
        totalYears += arrayOfObjects[i].yearsOfExperience;
    }
    return totalYears;
}

console.log(`Example 1: ${findTotalYears(employees)}`);
console.log(`Example 2: ${findTotalYears(otherEmployees)}`);





console.log(" ");