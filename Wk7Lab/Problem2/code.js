function checkInput(){
    let gmailFormat ="@gmail.com"
    let input = prompt("Input a valid GMail address:");
    let found = 0;
    
    for (let i = 0; i <input.length; i++){
        if(input.charAt(i)=="@"){
            found = 1;
            for (let j = 0; j <input.length; j++){
                if(input.charAt(i)!=gmailFormat.charAt(j)){
                    document.write("Your gmail address is invalid");
                    return;
                } 
                i++;
            }
        }    
    }

    if (found == 0 || input == ""){
        document.write("Your gmail address is invalid");
        return;   
    }
    else{
        document.write("Your gmail address is valid");
    }
}