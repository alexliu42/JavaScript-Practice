    let items = ["Food","Drink","Supplementary"]; 
    let input = [];
    let minChoice = ["1","1","1"];
    let maxChoice = ["2","3","2"];
    let id = ["fi","di","si"]
    let total = 0;

    document.write("<h2>Order Summary</h2>");

    for (let i = 0; i<items.length; i++){
        input[i] = prompt("Please enter a number to choose the " + items[i] + " item from the menu");
        let choice = GetChoice(input[i],minChoice[i],maxChoice[i]);
        let choiceitem = document.getElementById(id[i]+choice).innerHTML;
        document.write("<ul><li>Your choice from the " + items[i] + " menu is: " + choice + ". " + choiceitem +"</li></ul>" );
        
        let text ="";

        for (let j = 0; j < choiceitem.length; j++){
            if(choiceitem.charAt(j)=="$"){
                j++;
                for (let k=j; k<choiceitem.length; k++){
                    text += choiceitem.charAt(k);
                }
            break;            
            }
        }
        
            total += Number(text)
    }

    document.write("<h3>Your total is: $" + total + "<h3>");


function GetChoice(promptString, minChoice, maxChoice){
    
    let promptStringNum = Number(promptString);
    let minChoiceNum = Number(minChoice);
    let maxChoiceNum = Number(maxChoice);
  
    while(promptStringNum<minChoiceNum || promptStringNum>maxChoiceNum || !Number.isInteger(promptStringNum))
    {
        promptStringNum = Number(prompt("Please enter a valid input within the range")); 
    }
    return parseInt(promptStringNum);
}


