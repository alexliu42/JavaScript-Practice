let arr = [];
randomLength = parseInt(Math.random() * (10 - 3 + 1)) + 3;
    
function randomArray(){
    for(let i = 0; i < randomLength; i ++){
        arr.push(parseInt(Math.random() * (200 - 100 + 1)) + 100)
    }
    document.getElementsByTagName("div")[0].innerText = arr;
}                                           

function addToArray(){
    inputNum = prompt("Please enter a number to add into array:")
    if(inputNum !=null){    
        while (isNaN(inputNum)||inputNum == ""){
            inputNum = prompt("Please enter a valid number to add into array:")
            if (inputNum == null){
                return
            }
        }
        arr.push(inputNum);
        document.getElementsByTagName("div")[0].innerText = arr;
    }
}

function removeFromArrayByIndex()
{
    inputIndex = prompt("Please enter a valid index to remove item from the index:")
    
    if(inputIndex !=null){        
        while(!Number.isInteger(Number(inputIndex)) || inputIndex >= randomLength || inputIndex < 0 || inputIndex == ""){
            inputIndex = prompt("Please enter a valid index to remove item from the index:") 
            if(inputIndex == null){
                return;
            }
        }
        arr.splice(inputIndex,1);
        document.getElementsByTagName("div")[0].innerText = arr;
    }
       
}

function removeFromArrayByValue()
{
    inputNumber = prompt("Please enter a valid number to remove item from the index:");
    if(inputNumber !=null){    
        while (isNaN(inputNumber)||inputNumber == ""){
            inputNumber = prompt("Please enter a valid number to remove item from the index:")        
        }
        for (let i = 0; i < arr.length; i++){
            if(arr[i] == inputNumber){
                arr.splice(i,1);
                i--;
            }
        } 
        document.getElementsByTagName("div")[0].innerText = arr;          
    }   
}
