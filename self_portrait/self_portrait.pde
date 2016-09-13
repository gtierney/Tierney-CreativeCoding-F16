void setup(){

size(500,500);

int cheekbase = 380;
int beyeline = 160;
int eyebottom = 185;
int teyeline=165;
int eyetop = 130;
int baselip = 320;
int nosebase=260;
int ebbase=110;
int browh=90;


strokeWeight(6);


//face base
fill(255,230,204);
stroke(255,204,230);
triangle(40,40,440,40,240,440);

//left cheek
fill(236,217,198);
triangle(440,40,270,cheekbase,440,cheekbase);
triangle(255,410,390,cheekbase,270,cheekbase);

//right cheek
triangle(40,40,210,cheekbase,40,cheekbase);
triangle(210,cheekbase,225,410,90,cheekbase);

//left eye
//bottom
fill(51,102,0);
stroke(0,51,51);
triangle(80,beyeline,180,beyeline,140,eyebottom);
//top
triangle(80,teyeline,180,teyeline,170,eyetop);

//right eye
//bottom
triangle(300,beyeline,400,beyeline,350,eyebottom);
//top
triangle(300,teyeline,400,teyeline,300,eyetop);

//lips
//bottom
fill(179,0,71);
stroke(0,0,255);
triangle(180,baselip,310,baselip,240,360);
//top
fill(255,0,102);
triangle(180,baselip,230,290,310,baselip);
triangle(180,baselip,260,290,310,baselip);

//nose
fill(236,217,198);
stroke(255,204,230);
triangle(240,beyeline,240,nosebase,210,nosebase);
//tip
fill(249,242,236);
triangle(240,230,215,nosebase,265,nosebase);

//left eyebrow
fill(78,50,24);
stroke(59,37,18);
triangle(180,ebbase,80,ebbase,110,browh);
triangle(110,browh,80,ebbase,50,140);

//right eyebrow
triangle(300,ebbase,400,ebbase,380,browh);
triangle(400,ebbase,380,browh,430,130);

}