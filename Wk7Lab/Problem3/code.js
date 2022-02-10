let array = [];
let sum = 0;
let max;
let min;

for (let i=0; i<10; i++){
    array.push(0);
}

array = RandomFillArray(array);
max = array[0];
min = array[0];

for(let j=0; j<9; j++){
    document.write(array[j] + ",");
    sum += array[j];
    if (array[j] > max){ 
        max = array[j];
    }
    if (array[j] < min) {
        min = array[j];
    }  
}

document.write(array[9] + "<br>" + "<br>");
sum += array[9]
if (array[9] > max){ 
    max = array[9];
}
if (array[9] < min) {
    min = array[9];
}
document.write("The sum of above random integers are:" + sum + "<br>" + "<br>");
document.write("The max number of of above random integers are:" + max + "<br>" + "<br>");
document.write("The min number of of above random integers are:" + min + "<br>" + "<br>");

function RandomFillArray(array){
    for (i=0; i<10; i++){
        array[i] = parseInt(Math.random() * 41 + 10);
    }
    return array;
}
