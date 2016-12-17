// Sound Sources:
// bird sound: http://soundbible.com/1239-Red-Tailed-Hawk.html
// waves sound:http://soundbible.com/1935-Ocean-Waves.html
// leaves sound: https://www.freesoundeffects.com/free-sounds/wind-sounds-10041/
// seal sound: https://www.freesoundeffects.com/free-sounds/seal-10057/
// whale sound: http://soundbible.com/744-Humpback-Whale.html

//Images Sources:
//whale image: http://images.clipartpanda.com/whale-clip-art-grey-baby-whale.svg
//seal image: http://www.clipartkid.com/images/25/seal-clip-art-clipart-panda-free-clipart-images-iNUw3a-clipart.png
//leaves image: http://images.clipartpanda.com/leaf-clip-art-leaves_clip_art_10936.jpg
//waves image: http://www.clker.com/cliparts/o/P/T/3/R/W/blue-water-splash-few-more-drops-hi.png
//bird image: http://www.clipartkid.com/images/10/clipartist-net-clip-art-birds-singing-musical-robin-egg-blue-IrZa72-clipart.png




//var vid;
var leavesSound;
var leavesObject;
var whaleSound;
var whaleObject;
var sealSound;
var sealObject;
var birdSound;
var birdObject;
var wavesSound;
var wavesObject;
var whale;
var leaves;
var birds;
var seal;
var waves;

function setup(){

  var myCanvas = createCanvas(400, 360);
  myCanvas.position(648,68);
  background(255);
  //vid = createVideo("assets/sunset1.mp4");

//loaded image files
  whale = loadImage("assets/whale.png");
  leaves = loadImage("assets/leaves.png");
  bird = loadImage("assets/bird.png");
  seal = loadImage("assets/seal.png");
  waves = loadImage("assets/waves.png");

//loaded sound files
  soundFormats('mp3');
  whaleSound = loadSound('assets/whaleSound.mp3');
  leavesSound = loadSound('assets/leavesSound.mp3');
  sealSound = loadSound('assets/sealSound.mp3');
  birdSound = loadSound('assets/birdSound.mp3');
  wavesSound = loadSound('assets/wavesSound.mp3');

  whaleObject = new WhaleObject(120, 230, 100);
  leavesObject = new LeavesObject(120, 60, 100);
  sealObject = new SealObject(320, 200, 150);
  birdObject = new BirdObject(300, 60, 100);
  wavesObject = new WavesObject(10, 300, 300, 200);

}

function draw(){

  whaleObject.display(mouseX, mouseY);
  leavesObject.display(mouseX, mouseY);
  sealObject.display(mouseX, mouseY);
  birdObject.display(mouseX, mouseY);
  wavesObject.display(mouseX, mouseY);

  image(leaves, 50, 0, leaves.width/5, leaves.height/5);
  image(waves, 0, 270);
  image(bird, 250, 0, bird.width/5, bird.height/5);
  image(seal, 230, 125, seal.width/5, seal.height/5);
  image(whale, 50, 140, whale.width/5, whale.height/5);



 
}

function mousePressed(){
  if(whaleObject.contains(mouseX, mouseY)) {
    whaleSound.play();
  }

  if(leavesObject.contains(mouseX, mouseY)){
    leavesSound.play();
  }

  if(sealObject.contains(mouseX, mouseY)) {
    sealSound.play();
  }

  if(birdObject.contains(mouseX, mouseY)) {
    birdSound.play();
  }

  if(wavesObject.contains(mouseX, mouseY)) {
    wavesSound.play();
  }

}



//WHALE OBJECT
var WhaleObject = function(x_, y_, r_) {
  var x = x_;
  var y = y_;
  var r = r_;

  this.contains = function(mx, my){
    if(dist(mx, my, x, y) < r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.display = function(mx, my){
    if(this.contains(mx, my)) {
      noFill();
    }
    noStroke();
    ellipse(x, y, r, r);
  };
};

//LEAVES OBJECT
var LeavesObject = function(x_, y_, r_) {
  var x = x_;
  var y = y_;
  var r = r_;

  this.contains = function(mx, my){
    if(dist(mx, my, x, y) < r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.display = function(mx, my){
    if(this.contains(mx, my)) {
      noFill();
    }
    noStroke();
    ellipse(x, y, r, r);
  };
};

//SEAL OBJECT
var SealObject = function(x_, y_, r_) {
  var x = x_;
  var y = y_;
  var r = r_;

  this.contains = function(mx, my){
    if(dist(mx, my, x, y) < r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.display = function(mx, my){
    if(this.contains(mx, my)) {
      noFill();
    }
    noStroke();
    ellipse(x, y, r, r);
  };
};

//  BIRD OBJECT
var BirdObject = function(x_, y_, r_) {
  var x = x_;
  var y = y_;
  var r = r_;

  this.contains = function(mx, my){
    if(dist(mx, my, x, y) < r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.display = function(mx, my){
    if(this.contains(mx, my)) {
      noFill();
    }
    noStroke();
    ellipse(x, y, r, r);
  };
};

//WAVES OBJECT
var WavesObject = function(x_, y_, r_) {
  var x = x_;
  var y = y_;
  var r = r_;

  this.contains = function(mx, my){
    if(dist(mx, my, x, y) < r) {
      return true;
    }
    else {
      return false;
    }
  };

  this.display = function(mx, my){
    if(this.contains(mx, my)) {
      noFill();
    }
    noStroke();
    rect(x, y, r, r);
  };
};











