class Rectangle {
    constructor(x, y, dX, dY, width, height, color){
        this.x = x;
        this.y = y;
        this.dX = dX;
        this.dY = dY;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    MoveRight(){
        this.x = this.x + this.dX;
    }
    MoveLeft(){
        this.x = this.x - this.dX;
    }
    MoveUp(){
        this.y = this.y - this.dY;
    }
    MoveDown(){
        this.y = this.y + this.dY;
    }
    Draw(){
        let rec = document.getElementById("drawingCanvas");
        let context = rec.getContext("2d");
        
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x,this.y+this.height);
        context.lineTo(this.x+this.width,this.y+this.height);
        context.lineTo(this.x+this.width,this.y);
        context.lineTo(this.x,this.y);
        context.strokeStyle = this.color;
        context.stroke();
    }
}


let rec = document.getElementById("drawingCanvas");
let context = rec.getContext("2d");
        
let createFlag = 0;
let arrRect = [];

for (let i = 0; i < 5; i++){
    arrRect[i] = new Rectangle(10,10,20,30,200,300,20)
}

function CreateRectangles(){   
    for (let i = 0; i < 5; i++){
        let redrawFlag = 1;
        while(redrawFlag == 1){
            arrRect[i].x = Math.random() * 300;
            arrRect[i].y = Math.random() * 400;
            arrRect[i].dX = 10;
            arrRect[i].dY = 10;
            arrRect[i].width = Math.random() * (100 - 50 + 1) + 50;
            arrRect[i].height = Math.random() * (100 - 50 + 1) + 50;
            let randomRGB1 = Math.random() * (255 - 0 + 1);
            let randomRGB2 = Math.random() * (255 - 0 + 1);
            let randomRGB3 = Math.random() * (255 - 0 + 1);
            arrRect[i].color = "rgb(" + randomRGB1 + "," + randomRGB2 + "," + randomRGB3 + ")"
            if (arrRect[i].x + arrRect[i].width >300){
                redrawFlag = 1;
            }
            else if(arrRect[i].y + arrRect[i].height >400){
                redrawFlag = 1;
            }
            else if (arrRect[i].y < 0){
                redrawFlag = 1;
            }
            else if (arrRect[i].x < 0){
                redrawFlag = 1;
            }
            else{
                redrawFlag = 0;
            }
        }
        console.log(i)
        arrRect[i].Draw();
    }
    createFlag = 1;    
}

function MoveRight(){ 
    if (createFlag == 0){ 
        return
    }
    for (let i = 0; i < 5; i++){
        if(arrRect[i].x + arrRect[i].width <= 300){
            arrRect[i].MoveRight();
            arrRect[i].Draw();
        }
    }
}

function MoveLeft(){
    if (createFlag == 0){ 
        return
    }
    for (let i = 0; i < 5; i++){
        if(arrRect[i].x >= 0){
            arrRect[i].MoveLeft();
            arrRect[i].Draw();
        }
    }
}

function MoveUp(){
    if (createFlag == 0){ 
        return
    }
    for (let i = 0; i < 5; i++){
        if(arrRect[i].y >= 0){
            arrRect[i].MoveUp();
            arrRect[i].Draw();
        }
    }
}

function MoveDown(){
    if (createFlag == 0){ 
        return
    }
    for (let i = 0; i < 5; i++){
        if(arrRect[i].y + arrRect[i].height <= 400){
            arrRect[i].MoveDown();
            arrRect[i].Draw();
        }
    }
}