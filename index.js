// JS EXERCISES
//         21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
//         22) Create an object with properties such name, surname, email
//         23) Delete the email property from the previously created object
//         24) Create an array with 10 strings in it
//         25) Print in the console every string from the previous array
//         26) Create an array with 100 random numbers in it
//         27) Write a function to get the maximum and minimum values from the previously created array
//         28) Create an array of arrays, in which every array has 10 random numbers
//         29) Create a function that gets 2 arrays as parameters and returns the longest one
//         30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

////////////--------------Task started -----------------///////////////






//         21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
console.log("\nTask 21\n");
let x = "John"
let y = "Doe"
console.log(x + "<>" + y);


///////////------22) Create an object with properties such name, surname, email---------- ////////////
console.log("\nTask 22\n");
let myDetails = {
    name: "Farrukh",
    surname: "Abduganiev",
    email: "farruxbe19@gmail.com"
}
console.log(myDetails);



//         23) Delete the email property from the previously created object //////////
console.log("\nTask 23\n");
let deleteEmail = delete myDetails.email
console.log(myDetails);


//         24) Create an array with 10 strings in it   //////////
let arr = ["Macbook", "Ipad","Iphone", "Iwatch", "Airpods","six","seven","eight","nine","ten"]


//         25) Print in the console every string from the previous array//////
console.log("\nTask 25\n");
console.log(arr);

//         26) Create an array with 100 random numbers in it/////
console.log("\nTask 26\n");
function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}
let output6 = randomArray(100,150)
console.log(output6)


//         27) Write a function to get the maximum and minimum values from the previously created array///
console.log("\nTask27\n");
const getMinAndMaxValues = function(){
    let maxValue = Math.max.apply(null, output6)
    let minValue = Math.min.apply(null, output6)
    console.log("Max value: " + maxValue)
    console.log("Min value: " + minValue)
}
let output7 = getMinAndMaxValues()


//         28) Create an array of arrays, in which every array has 10 random numbers////
console.log("\nTask28\n");
let arr10 = [];
for(let i = 0; i < 10; i++){
     let current = [];
     for(let j = 0; j < 10; j++)
          current.push(Math.floor(Math.random() * 10));
     arr10.push(current);
}
console.log(arr10)


//         29) Create a function that gets 2 arrays as parameters and returns the longest one////
console.log("\nTask29\n");
const getLongestArray = function(arrayA, arrayB){
    if(arrayA.length > arrayB.length){
        console.log("First array is longest one")
    }
    else if(arrayA.length < arrayB.length){
        console.log("Second array is longest one")
    }
    else if(arrayA.length = arrayB.length){
        console.log("Length of array is equal")
    }
    else{
        console.log("You entered wrong data type!")
    }
}
let output9 = getLongestArray([1,2,3,4,5],[2,4,6,2,9,6,4,2])



//         30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
console.log("\nTask30\n");
const returnHigherSumOfArrays = function(arrayA, arrayB){
    let sum1 = 0
    for(let i = 0; i<arrayA.length; i++){
        sum1 += arrayA[i]
    }
    let sum2 = 0
    for(let i = 0; i<arrayB.length; i++){
        sum2 += arrayB[i]
    }

    if(sum1 > sum2){
        console.log("Sum of first array is higher than sum of second array")

    }
    else if(sum2 > sum1){
        console.log("Sum of second array is higher than sum of first array")

    }
    else{
        console.log("Arrays has wrong data type elements. Please enter only numbers")
    }
}
let output10 = returnHigherSumOfArrays([1,4,5,6], [7,6,3,3,9])
console.log("\n");