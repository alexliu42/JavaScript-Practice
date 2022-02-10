/*
    Goal: Take two numbers and compute polygon area.
*/

// 1 b. Take two numbers and convert them into integers
let intN = convertToIntegers();
let intS = convertToIntegers();
console.log("Integer n is " + intN  + "\nInteger s is " + intS);

// 1 a c. Compute polygon area by writing a function and output to console.log
let area = GetPolygonArea(intN,intS);
console.log("Area of regular polygon: "+ area);

// 1 e. Area check and produce assoicated messages
if (area > 100) 
{
    console.log("Large area");
}
else if (area >= 50 && area <= 100)
{
    console.log("Just right");
}
else if (area < 50)
{
    console.log("Small area");
}

/*
    Convert and return the input number into integer.
*/
function convertToIntegers(){
    let n = prompt("Enter an number:");
    let intN = parseInt(n);
    return intN
}

/*
    Caluclate polygon area using the formula given with two parameters integer n and integer s.
    Math library is used for tan and PI
*/
function GetPolygonArea(n,s){

    return (n * s**2)/(4*Math.tan(Math.PI/n))

}

//2.
/*
    Goal: Print out a random number between input a and b
*/

// 2 a. Take tow numbers and convert them into integers using same function from part 1
let intA = convertToIntegers();
let intB = convertToIntegers();
console.log("Integer a is " + intA  + "\nInteger b is " + intB);

// 2 b. Produce a random integer using function and print it on console.log
let randInt = GetRandominteger(intA, intB);
console.log("Random integer between a and b is: " + randInt);

// Using the formula given and modify the concept to Math.random() * (difference between two bounds) + initial bound.
// Plus 1 to make the last bound inclusive.
// Convert the float number into integer and return.
function GetRandominteger(a,b){
    let randFloat = (Math.random()*(b-a+1))+a;
    let randomInt = parseInt(randFloat);
    return randomInt;
}

