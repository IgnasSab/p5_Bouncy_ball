let width = 1400
let height = 1000
let radius = 50
let start = false
let ballV = 0
let ballA = 1.2
let firstPress = false
let ballStroke = 4
function setup()
{
createCanvas(width, height)

}

function draw()
{
 background(100)
 drawFrame()

 if(mouseIsPressed === false && firstPress === true)
 {
    

    ballV += ballA
    ballY += ballV
    ballV *= 0.984
    
    if(ballY > height-radius-5)
    {
        ballV *= -1
        ballY = height-radius-5
    }
 
    strokeWeight(ballStroke)
    stroke(250,250,0)
    fill(255,0,255)
    circle(mouseVector.x, ballY, radius*2)  
 }

 if (mouseIsPressed)
 {
    firstPress = true
    mouseVector = createVector(mouseX, mouseY)
    strokeWeight(ballStroke)
    stroke(255,255,0)
    fill(255,0,255)
    ballVector = createVector(mouseVector.x, mouseVector.y)
    if(ballVector.y > height - radius - 5)
    {
        mouseVector.y = height - radius - 5
    }
    if(ballVector.y < radius + 5)
    {
        mouseVector.y = radius + 5
    }
    if(ballVector.x > width - radius - 5)
    {
        mouseVector.x = width - radius - 5 
    }
    if(ballVector.x < radius + 5)
    {
        mouseVector.x = radius + 5
    }
    circle(mouseVector.x, mouseVector.y, radius*2)
    
    ballY = mouseVector.y 
    ballX = mouseVector.x
    ballV = 0
    
 }
 
}

function drawFrame()
{ 
    rectMode(CENTER)
    strokeWeight(10)
    stroke(0,255,0)
    fill(100)
    rect(width/2, height/2, width, height)
}