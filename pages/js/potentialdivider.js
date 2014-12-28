var resistance = 1000
var lightLevel, resistor,button;
var LDResitance = 3000

function setup(){
    frameRate = 30;
    colorMode(RGB, 255);
    red = color(255,0,0);
    green = color(0,255,0);
    blue = color(125, 249, 255)
    white = color(255)
    createCanvas(400,500);
    lightLevel = createSlider(2600,2600000,2600);
    lightLevel.position(200,450);
    resistor = createInput(1000);
    resistor.position(200,400);
    button = createButton("Submit")
    button.position(325,400);
    button.mousePressed(getResistance)

};


function draw(){
    LDResistance = lightLevel.value()
    background(50);
    stroke(255)
    text((LDResistance/1000).toFixed(1)+'k'+"\u2126",150,125)
    text("Resistor Value in \u2126",80,415)
    text("Light level to LDR",100,465)
    text("V out",250,205)
    text("+5V",40,40)
    text("0V",40,400)
    push()
    translate(94,260)
    textSize(18)
    rotate(PI/2)

    if(resistance < 1000){
	textSize(19-(''+resistance).length)
	text((resistance).toFixed(0)+' \u2126',0,0)
    }
    else if(resistance < 100000){
	textSize(19-(''+resistance/1000).length)
	text((resistance/1000).toFixed(0)+' k \u2126',0,0)
    }
    else{
	textSize(19-(''+resistance/1000000).length)
	text((resistance/1000000).toFixed(0)+' M \u2126',0,0)
    }

    pop()
    textAlign(CENTER);
    textSize(24);
    noFill();
    rect(90,250,20,60);
    line(100,250,100,150);
    drawLDR(100,125,50);
    line(100,100,100,50);
    line(100,310,100,375);
    line(50,50,300,50);
    line(50,375,300,375);
    line(100,200,250,200);
    drawVoltmeter();
};

function drawLDR(x,y,size){
    ellipse(x,y,size,size)
    var resWidth = size/4
    var resHeight = size/2
    rect(x-resWidth/2,y-resHeight/2,resWidth,resHeight)
    line(x,y+size/2,x,y+resHeight/2)
    line(x,y-size/2,x,y-resHeight/2)
    push()
    translate(-size/4,0)
    translate(x-size,y-size)
    rotate(PI/4)
    line(0,0,size/2,0)
    triangle(size/2,0-size/10,size/2,0+size/10,size/2+size/10,0)
    line(0,0,size/2,0)
    triangle(size/2,0-size/10,size/2,0+size/10,size/2+size/10,0)
    translate(0,size/4)
    line(0,0,size/2,0)
    triangle(size/2,0-size/10,size/2,0+size/10,size/2+size/10,0)
    line(0,0,size/2,0)
    triangle(size/2,0-size/10,size/2,0+size/10,size/2+size/10,0)
    pop()
}

function getResistance(){
    resistance = +resistor.value();
    console.log('resistor = '+resistance)
    console.log('ldr = ' +LDResistance)
    console.log(resistance+LDResitance)
    console.log((resistance/(resistance + LDResitance))*5)
    
}

function drawVoltmeter(){
    ellipse(220,200+175/2,50,50);
    line(220,200,220,200+175/2-25);
    line(220,200+175/2+25,220,375);
    fill(255)
    textSize(14)
    var VOUT = (resistance/(resistance + LDResistance))*5
    text(VOUT.toFixed(2)+'V',220,205+175/2)

}
