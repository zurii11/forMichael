let squares = [];
let a;
let b;
let slider;
let startx;

function setup() {
    createCanvas(600, 600);
    b = radians(20);
    a = radians(90);
    for (let i = 0; i < 7; i++)
    {
        squares.push(new Sq(0, 0, a+i*b));
    }
}

function draw() {
    background(51);

    //a = map(mouseX, 0, width, radians(0), radians(360));

    for (let i = 0; i < squares.length; i++)
    {
        squares[i].show(a+i*b);
    }
    // noLoop();
}

function mouseDragged()
{
    if (mouseY > 270 && mouseX < 510)
    {
        a -= radians(map((startx-mouseX), 0, width, radians(0), radians(290)));
        console.log(startx-mouseX);
    }
}

function mousePressed()
{
    startx = mouseX;
    console.log(mouseY);
    console.log(squares[0].x + 'x');
}

class Sq
{
    constructor(x, y, a)
    {
        this.x = x;
        this.y = y;
        this.a = a;
    }

    show(ang)
    {
        push();
        translate(width/2, height+400);
        rotate(ang);
        translate(0, 650);
        rectMode(CENTER);
        square(this.x, this.y, 150);
        pop();
    }
}
