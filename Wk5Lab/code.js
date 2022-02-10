/*1. 
    Ask user input with prompt 
    Use while loop to check if the input is not a number or greater than zero or empty string 
    If not keep on asking correct input
    Return the string and print it in the console 
*/
function GetPositiveInteger(){
    let input = prompt("Enter a positive integer:");

    while (input <= 0 || isNaN(input)|| input ==""){
        input = prompt("Try again! Please enter a positive integer:");
    }

    return input
}

let posInt = GetPositiveInteger();

console.log("Q1. The positive integer you enter is:" + posInt);


/*2.
    Reuse the function to get positive integer
    Use while loop to iterate and append - into string variable text 
    Print the patterns in the console
*/
let posInt2 = GetPositiveInteger();
let text = ""
let i = 1;
while (i <= posInt2){
    text +=  i + " - " ;
    i++;
}

console.log("Q2. "+ text)


/*3.
    Reuse the function to get positive integer
    Use for loop to iterate from 1 up to user input
    Perform multiplication in each iteration and print the multiplication in the console
*/
let posInt3 = GetPositiveInteger();
console.log("Q3.")
for (let i=1;i<=posInt3;i++){
    ans = i * posInt3;    
    console.log(i + " x " + posInt3 + " = " +ans+ "\n");
}

/*4.
    Reuse the function to get positive integer
    Use for loop to iterate from 1 up to user input
    Use input % j to obtain j as factor in each iteration
    Append j, in factor variable in each iteration
    Accumulcate total with factor obtain from each iteration, where the total starting from zero  
    Print factors ans sum in the console
*/

let posInt4 = GetPositiveInteger();
let total = 0;
let factor ="";
for (let j=1;j<=posInt4; j++){
    if (posInt4 % j == 0){
        factor += j + ","
        total += j;
    }
}
console.log("Q4.")
console.log("Factors: "+ factor)
console.log("Sum = " + total)





