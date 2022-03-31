var x=0
var y=0
var drawCircle=""
var drawRect=""
var apple=""
var drawApple=""
function preload(){
    apple=loadImage("APPLEL.png")
    }
var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
console.log(content)
document.getElementById("status").innerHTML="System is listening, please speak."+content
if (content=="Circle") {
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="System has started drawing a circle."
    drawCircle="set"
}
if (content=="rectangle") {
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="System has started drawing a rectangle."
    drawRect="set"
}
if (content=="Apple") {
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="System has started drawing a apple."
    drawApple="set"
}
}

function start(){
    document.getElementById("status").innerHTML="System is listening, please speak."
    recognition.start()
}
function setup(){
canvas=createCanvas(900,600)

    
}
function draw(){
    if (drawCircle=="set") {
        radius=Math.floor(Math.random()*100)
        circle(x,y,radius)
        document.getElementById("status").innerHTML=" A circle has been drawn."
        drawCircle=""
    }
    if (drawRect=="set") {
        radius=Math.floor(Math.random()*100)
        rect(x,y,70,50)
        document.getElementById("status").innerHTML="A rectangle has been drawn."
        drawRect=""
    }
    if (drawApple=="set") {
        radius=Math.floor(Math.random()*100)
        image( apple,x,y,70,50)
        document.getElementById("status").innerHTML="A Apple has been drawn."
        drawApple=""
    }
}
