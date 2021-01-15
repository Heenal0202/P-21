var canvas;
var music;
var M1, M2, M3, M4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    M1= createSprite(110,600,190,30);
    M1.shapeColor = "blue";

    M2 = createSprite(310,600,190,30);
    M2.shapeColor = "orange";

    M3 = createSprite(510,600,190,30);
    M3.shapeColor = "red";

    M4 = createSprite(710,600,190,30);
    M4.shapeColor = "green";

    ball = createSprite(300,300,20,20);
    ball.shapeColor = "white";
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    
    ball.bounceOff(edges);

    if(ball.isTouching(M1)) {
        ball.shapeColor = "blue";
        music.play();
    } else if(ball.isTouching(M2)) {
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    } else if(ball.isTouching(M3)) {
        ball.shapeColor = "red";
        music.play();
    } else if(ball.isTouching(M4)) {
        ball.shapeColor = "green";
        music.play();
    }

    if(keyDown("space")){
        ball.velocityX = 5;
        ball.velocityY = 5;
    }
    
    drawSprites();
}
