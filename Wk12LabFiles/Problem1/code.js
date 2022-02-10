class Bullet{
    constructor(x, y, radius, dX, dY, color, dir){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dX = dX;
        this.dY = dY;
        this.color = color;
        this.direction = dir; 
    }
    Move(){
        switch(this.direction){
            default:
                this.MoveRight();
        }
    }

    MoveRight(){
        this.x = this.x + this.dX;
    }

    Draw(){ 
        let rec = document.getElementById("drawingCanvas");
        let brush = rec.getContext("2d");
        
        brush.beginPath();
        brush.arc(this.x, this.y, this.radius, ToRadians(0), ToRadians(360));
        brush.closePath();
        brush.fillStyle = this.color;
        brush.fill();
    }
}
class Bird {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dX = 10;
        this.dY = 10;
        this.fileName = "flappyBird.png";
        this.mainImg = new Image();
        this.mainImg.src = this.fileName
        this.spriteX = 0
        this.spriteY = 0;
        this.spriteWidth = 75;
        this.spriteHeight = 50;
        this.direction = "right"
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
        let brush = rec.getContext("2d");
        
        
        brush.clearRect(0,0,rec.width,rec.height);
        
        brush.drawImage(this.mainImg, spriteStart, this.spriteY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight);
        
        spriteStart += this.spriteWidth
        
        if (spriteStart >= this.mainImg.width){
           spriteStart = 0;
           
        }
    }
    Fire(){
        let radius = 10;
        let ranX = this.x + this.spriteWidth;
        let ranY = this.y + this.spriteHeight / 2;
        let dX = 20;
        let dY = 20;
        let color = RandomColor();
        let b = new Bullet(ranX, ranY, radius, dX, dY, color, this.direction);
        bullets.push(b);
        console.log(bullets)
    }

}

let birdObject = new Bird(0,0)
let spriteStart = 0;
let bullets = [];
setInterval(DrawScreen,100)

let myArrows= {
    up: false,
    down: false,
    left: false,
    right: false, 
    f: false
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
    if(event.key === "f"){
        myArrows.f = true;
        birdObject.Fire();
        myArrows.f = false;
    }
});

function MoveRight(){   
    if(birdObject.x + birdObject.spriteWidth > 299){
        return
    }
    else{
        birdObject.MoveRight();
        birdObject.Draw();    
    }
}
function MoveLeft(){     
    if(birdObject.x < 1){
        return
    }
    else{
        birdObject.MoveLeft();
        birdObject.Draw();
    }    
}
function MoveUp(){  
    if(birdObject.y < 1){
        return
    }
    else{   
        birdObject.MoveUp();
        birdObject.Draw();    
    }
}
function MoveDown(){     
    if(birdObject.y + birdObject.spriteHeight > 399){
        return
    }
    else{
        birdObject.MoveDown();
        birdObject.Draw(); 
    }   
}

function DrawScreen(){
    birdObject.Draw()
    DrawAllBullets();
}

function ToRadians(degrees){
    return degrees * Math.PI / 180;
}

function RandomColor(){
    let r = GetRandomInteger(0, 255);
    let g = GetRandomInteger(0, 255);
    let b = GetRandomInteger(0, 255);
    return "rgba(" + r + ", " + g + ", " + b + ", 1.0)";
}
function GetRandomInteger(a, b){
    // returns a random integer x such that a <= x <= b
    // 
    // @params
    // a: integer
    // b: integer
    // @returns
    // a random integer x such that a <= x <= b

    // switch the large and small if out of order
    if (a > b){
        small = b;
        large = a;
    }
    else{
        small = a;
        large = b;
    }
    
    let x = parseInt(Math.random() * (large - small + 1)) + small
    return x;
}

function DrawAllBullets(){
    // looping through all bullets (global array) and drawing them
    for(let i = 0; i < bullets.length; i++){
        // draw and move i-th circle if it exists
        if (bullets[i] !== undefined){
            bullets[i].Draw();
            bullets[i].Move();
        }
    }
}
