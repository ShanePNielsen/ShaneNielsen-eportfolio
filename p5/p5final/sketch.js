var wingtiplx;
wingtiplx = 330;
var wingtiply;
wingtiply = 320;
var wingtiprx;
wingtiprx = 170;
var wingtipry;
wingtipry = 320;
var wingflaplx;
wingflaplx = 355;
var wingflaply;
wingflaply = 275
var wingflaprx;
wingflaprx = 145;
var wingflapry;
wingflapry = 275;
var textx = 250;
var recty = 350;
var pupilwidth = 5;


function setup() {
  createCanvas(500, 500);
    frameRate(30) //wingspeed
}

function draw() {
  background("#45b6fe");// put drawing code here
    fill(220)
    stroke(220)
    rect(0,recty,500,300)//ice
    noStroke();
    fill("orange");
    rect(230,305,4,75);//rightleg
    rect(270,305,4,75);//leftleg
    stroke("black");
    strokeWeight(3)
    fill("black")
    ellipse(250,240,150,200);//body
    fill("white")
    ellipse(250,240,90,140);//belly
    fill("black")
    ellipse(250,100,150,150);//head
    fill("white")
    ellipse(225,75,25,25);//righteye
    ellipse(275,75,25,25);//lefteye
    fill("black")
    ellipse(225,75,pupilwidth,pupilwidth);//pupils
    ellipse(275,75,pupilwidth,pupilwidth);
    fill("orange")
    triangle(230,95,270,95,250,155);//beak
    fill("black")
    triangle(305,175,wingtiplx,wingtiply,wingflaplx,wingflaply);//leftwing
    triangle(195,175,wingtiprx,wingtipry,wingflaprx,wingflapry);//rightwing
    stroke("orange");
    fill("orange")
    triangle(234,380,230,380,232,390);//righttoes
    triangle(232,382,230,380,222,383);
    triangle(234,380,232,382,242,383);
    triangle(274,380,270,380,272,390);//lefttoes
    triangle(272,382,270,380,262,383);
    triangle(274,380,272,382,282,383); 
    if (wingtiply< 290){
            wingtiply= 320;
        }else{
            wingtiply= wingtiply - 5;
        }
    if (wingtiplx> 360){
            wingtiplx= 330;
        }else{
            wingtiplx= wingtiplx + 5;
        }
    if (wingtiprx< 140){
            wingtiprx= 170;
        }else{
            wingtiprx= wingtiprx - 5;
        }
    if (wingtipry< 290){
            wingtipry= 320;
        }else{
            wingtipry= wingtipry - 5;
        }
    if (wingflaplx> 385){
            wingflaplx= 355;
        }else{
            wingflaplx= wingflaplx + 5;
        }
    if (wingflaply< 245){
            wingflaply= 275;
        }else{
            wingflaply= wingflaply - 5;
        }
    if (wingflaprx< 115){
            wingflaprx= 145;
        }else{
            wingflaprx= wingflaprx - 5;
        }
    if (wingflapry< 245){
            wingflapry= 275;
        }else{
            wingflapry= wingflapry - 5;//wingsflapping
        } 
    stroke("white")
    fill("white")
    ellipse(50,50,60,50);//leftcloud
    ellipse(80,40,60,50);
    ellipse(130,50,60,50);
    ellipse(70,70,60,50);
    ellipse(110,65,60,50);
    ellipse(450,50,60,50);//rightcloud
    ellipse(420,40,60,50);
    ellipse(370,50,60,50);
    ellipse(430,70,60,50);
    ellipse(390,65,60,50);
     fill("red");   
   noStroke("red");   
   textSize(30);   
   textFont("Georgia");   
   textStyle(BOLD);   
   textAlign(LEFT);   
   text("Help Me Fly!",160,textx);//text
   }

    function mousePressed() {
   textx = textx + 30;     //flygoesdown   
   if(textx>500){            // resets to top
      textx = 0;   
  }else{
      textx=textx + 30;
  }
    recty = recty + 45; //rect goes away
    pupilwidth=15; //pupils get bigger
}
