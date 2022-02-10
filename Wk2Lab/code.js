//a.
    //i. Output: -13, Explain :15-2 goes first and negative sign added after.
    console.log(-(15-2));

    //ii. Output: 27, Explain : 6*6 and 3*7 go first then 36 + 7 - 21 + 5 
    console.log(6*6+7-3*7+5);

    /*iii. Output: x = -110, y = 2, 
    Explain :  
        First assignments of x= 5 and y = 7 were overwritten by line 17 and line 18. 
        x and y are tracked and updated during expression assignments from line 17 - 19.
        Line 17. x = 56, 
        Line 18. y = (56 * 2) module 5 = 2, where module computes the remainder of 112/5 
        Line 19. x = 2  - ((10 module 8) * 56) = -110, where module computes the remainder of 10/8
        */
    let x = 5, y = 7;
    x  = 8 * 8 - 8; 
    y  = x * 2 % 5; 
    x  = y - 10 % 8 * x;
    console.log(x);
    console.log(y);

    /*iv. Output: 27TEXT, Explain : Math caluclation first following by math order of operation and 
    lastly plus the string "TEXT" to print*/
    console.log(6 * 6 + 7 - 3 * 7 + 5 + "TEXT");

//b.
    //i. There is variable naming conflict when delcaring x that it is already existed above.  
    //Alternatively change x to x1 to solve the error.
    let x1 = 4;

    //ii. Output: 2
    console.log(Math.sqrt(x1));

    //iii. Output: 6.34555, NaN
    x1 = 40;
    console.log(Math.sqrt(x1));
    x1 = "You can't square root a string";
    console.log(Math.sqrt(x1));

    /*iv. Math.sqrt(x) takes the sqaure root of x, where x needs to be a number. 
    Inserting string into x resulting in a "NaN", Not a number.*/

//c.
    //i. There are variable naming conflicts when delcaring x and y that they are already existed above.  
    //Alternatively change x to x2 and y to y2 to solve the error.
    
    let x2 = 4;
    let y2 = 2;

    //ii. Output: 16
    console.log(Math.pow(x2,y2))

    //iii. Output: 2, NaN, NaN
    x2 = 2;
    y2 = 1;
    console.log(Math.pow(x2,y2))

    x2 = 2; 
    y2 = "StringY";
    console.log(Math.pow(x2,y2))

    x2 = "StringX"
    y2 = "StringY"
    console.log(Math.pow(x2,y2))

    /*iv. Math.pow(x,y) calculates the result of x to the power of y, which is proved by 4^2 and 2^1. 
    The function doesn't take string input, where the result would only show "NaN" from above tests.
    */
