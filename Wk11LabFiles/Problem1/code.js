let can = document.getElementById("drawingCanvas");
let brush = can.getContext("2d");

let myMouse = {
    x: -1,
    y: -1        
};

class Circle{
    constructor(x, y, radius, dX, dY, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dX = dX;
        this.dY = dY;
        this.color = color;
        this.jump = 0;
    }

    Move(){
        let newX = this.x + this.dX;

        if(newX + (this.radius - 1) < can.width){
            this.x = newX;
        }
        else{
            this.dX = -this.dX;
        }

        if (newX - (this.radius - 1) >= 0){
            this.x = newX;
        }
        else{
            this.dX = -this.dX;
        }

        let newY = this.y + this.dY;

        if(newY + (this.radius - 1) < can.height){
            this.y = newY;
        }
        else{
            this.dY = -this.dY;
        }

        if (newY - (this.radius - 1) >= 0){
            this.y = newY;
        }
        else{
            this.dY = -this.dY;
        }
        this.ChangeRadius();
    }

    Draw(){
        brush.beginPath();
        brush.arc(this.x, this.y, this.radius, ToRadians(0), ToRadians(360));
        brush.closePath();
        brush.fillStyle = this.color;
        brush.fill();
    }

    ChangeRadius(){
        if(this.radius < 16 && this.jump == 0){
            this.radius += 1;
        }
        else {
            this.jump = 1
            this.radius -= 1;
            if (this.radius < 5){
                this.jump = 0;
                this.ChangeRadius();
            }
        }
    }
    IsInCircle(x,y){
        let straightLine = Math.sqrt(Math.pow(x-this.x, 2) + Math.pow(y-this.y, 2))
        if(straightLine<=this.radius){
            return true
        }
        else{
            return false
        }
    }
}

function MakeACircle(){
    let radius = 5;
    let ranX = Math.random() * (345-0+1)+5;
    let ranY = Math.random() * (195-0+1)+5;
    let dX = Math.random() * (10+10+1)-10;
    let dY = Math.random() * (10+10+1)-10;
    let color = RandomColor();
    let c = new Circle(ranX, ranY, radius, dX, dY, color);
    return c;
}

function ToRadians(degrees){
    return degrees * Math.PI / 180;
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

function RandomColor(){
    let r = GetRandomInteger(0, 255);
    let g = GetRandomInteger(0, 255);
    let b = GetRandomInteger(0, 255);
    return "rgba(" + r + ", " + g + ", " + b + ", 1.0)";
}


function MakeCircles(n){
    let arr = []; 

    let i = 0;
    while(i < n){
        let circle = MakeACircle();
        arr.push(circle);
        i++;
    }

    return arr;
}

let circles = MakeCircles(5);
var old = new Date().getTime();

function DrawCircles(){
    brush.clearRect(0,0,can.width, can.height);
    for(let i = circles.length - 1; i >= 0; i--){
        // add code here
        
        can.addEventListener("click",function(event){

            if (circles[i].IsInCircle(event.pageX,event.pageY)){
                circles.splice(i, 1);
                
                if (circles.length == 0){
                    document.getElementById('result').innerHTML = "Game Over ! The time you spent on clearing the circles is: " + time;
                    clearInterval(x)
                }
            }
        })
        
        circles[i].Draw();
        circles[i].Move();
    } 
}

let intObject = setInterval(DrawCircles, 100);
let time;

let x = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - old;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    time = (days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
    document.getElementById("time").innerHTML = time    
},1000)

