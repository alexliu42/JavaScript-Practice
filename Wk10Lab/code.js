let input = prompt("Enter ten numbers:")
let numArray = [];
numArray = input.split(" ")

console.log(ElminateDuplicates(numArray))

document.getElementById("array").innerHTML = ElminateDuplicates(numArray)

function ElminateDuplicates(lst){
    let uniqueArray = [];
    
    for (let i = 0; i<lst.length; i++){
        let unique = 1; 
              
        for(let j = 0; j<uniqueArray.length+1; j++){
            if(uniqueArray[j] == lst[i]){
                unique = 0;
            } 
        }
        
        if(unique == 1){
            uniqueArray.push(lst[i])
        }
    }

    return uniqueArray
}


let input2 = prompt("Enter numbers for question 2:")
let num2Array = input2.split(" ")
document.getElementById("mean").innerHTML = "The mean is " + mean(num2Array)
document.getElementById("SD").innerHTML = "The standard deviation is " +standardDeviation(num2Array,mean(num2Array))


function mean(arr){
    let temp = 0;
    for(let i = 0; i<arr.length; i++){
        temp += Number(arr[i])
        
    }
    return temp/arr.length   
}

function standardDeviation(arr,mean){
    let temp = 0
    
    for(let i = 0; i<arr.length;i++){
        temp += Math.pow(Number(arr[i])-Number(mean),2)
        
    }
    
    return Math.sqrt(temp/(Number(arr.length) - 1)) 
}

