//Question 1 a. 
let a = prompt("Enter a number:");
let b = prompt("Enter a number:");
let c = prompt("Enter a number:");

//Question 1 b. 
floatA = parseFloat(a);
floatB = parseFloat(b);
floatC = parseFloat(c);
console.log("floatA = " + floatA);
console.log("floatB = " +floatB);
console.log("floatC = " +floatC);

//Question 1 c. 
let x1 = (-floatB+Math.sqrt((floatB**2)-4*floatA*floatC))/(2*floatA);
let x2 = (-floatB-Math.sqrt((floatB**2)-4*floatA*floatC))/(2*floatA);

//Question 1 d i. 
console.log("first solution = " + x1);
console.log("second solution = " + x2);

//Question 1 d ii.
alert("first solution =" + x1 + "\n" + "second solution =" + x2);

//Question 2 a.
let stringA = prompt("Enter a string:");

//Question 2 b.
console.log("Length of your string = " + stringA.length);

//Question 3 a.
let stringB = prompt("Enter a string:");

console.log(stringB.charAt(0)==stringB.charAt(stringB.length-1))
 
//Question 4 a.

let birthday = prompt("Enter your date of birth in the format DD/MM/YYYY:");

//Question 4 b.

let bYear = birthday.substring(6,10);

console.log("The year of your birth = " +  bYear);

//Question 4 c.

console.log(2020-Number(bYear))

//Question 4 d.
let indexMonth = birthday.indexOf("12");
let indexYear = birthday.indexOf("1991");

let bMonth = birthday.substring(indexMonth,indexYear);

//Question 4 e.
console.log(bMonth >= 4 && bMonth <= 9)
  
