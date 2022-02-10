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
    ClearRect(){
        let rec = document.getElementById("drawingCanvas");
        let context = rec.getContext("2d");
       
        context.clearRect(this.x-1, this.y-1,this.x+ this.width,this.y+this.height)
    }
}

let myArrows= {
    up: false,
    down: false,
    left: false,
    right: false 
}

let bodyElem = document.getElementById("body");
bodyElem.addEventListener("keydown",function(event){
    if(event.key==="ArrowUp"){
        myArrows.up = true;
        MoveUp();
        myArrows.up = false;
    }
    if(event.key==="ArrowDown"){
        myArrows.down = true;
        MoveDown();
        myArrows.down = false;
    }
    if(event.key==="ArrowLeft"){
        myArrows.left = true;
        MoveLeft();
        myArrows.left = false;
    }
    if(event.key==="ArrowRight"){
        myArrows.right = true;
        MoveRight();
        myArrows.right = false;
    }
})

let rect = new Rectangle(10,10,20,30,200,300,20)
let createFlag = 0;

function CreateRectangle(){
    let redrawFlag = 1;    
    while(redrawFlag == 1){
        rect.x = Math.random() * 300;
        rect.y = Math.random() * 400;
        rect.dX = 10;
        rect.dY = 10;
        rect.width = Math.random() * (100 - 50 + 1) + 50;
        rect.height = Math.random() * (100 - 50 + 1) + 50;
        let randomRGB1 = Math.random() * (255 - 0 + 1);
        let randomRGB2 = Math.random() * (255 - 0 + 1);
        let randomRGB3 = Math.random() * (255 - 0 + 1);
        rect.color = "rgb(" + randomRGB1 + "," + randomRGB2 + "," + randomRGB3 + ")"
        if (rect.x + rect.width >300){
            redrawFlag = 1;
        }
        else if(rect.y + rect.height >400){
            redrawFlag = 1;
        }
        else if (rect.y < 0){
            redrawFlag = 1;
        }
        else if (rect.x < 0){
            redrawFlag = 1;
        }
        else{
            redrawFlag = 0;
        }
    }
    rect.Draw();
    createFlag = 1;    
}

function MoveRight(){ 
    if (createFlag == 0){ 
        return
    }
    else if(rect.x + rect.width > 300){
        return
    }
    else{
        rect.ClearRect();
        rect.MoveRight();
        rect.Draw();
    }
}

function MoveLeft(){
    if (createFlag == 0){ 
        return
    }
    else if(rect.x < 0){
        return
    }
    else{
        rect.ClearRect();
        rect.MoveLeft();
        rect.Draw();
    }
}

function MoveUp(){
    if (createFlag == 0){ 
        return
    }
    else if(rect.y < 0){
        return
    }
    else{
        rect.ClearRect();
        rect.MoveUp();
        rect.Draw();
    }
}

function MoveDown(){
    if (createFlag == 0){ 
        return
    }
    else if(rect.y + rect.height > 400){
        return
    }
    else{
        rect.ClearRect();
        rect.MoveDown();
        rect.Draw();
    }
}