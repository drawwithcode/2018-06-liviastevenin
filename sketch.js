var myData;
var balls = [];
var img = [];
var sfondo;
var myPoke;
var poke;

function preload() {
    // data = loadJSON('./assets/data.json');
    myData = loadJSON('./assets/digimon.json');
    sfondo = loadImage('./assets/sfondodd.jpg');
    myEgg = loadImage('./assets/drop1.png');
    myMoney = loadImage('./assets/shop.png');

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(myData);
//
  //  for( var i =0; i<15; i++){
  //   img[i] = loadImage("./assets/img/enemy_"+i+".png");
  // }


  for(var i=0; i<myData.data.length; i++ ) {

    // properties
    var x = random(width);
    var y = random(height);
    var size = myData.data[i].Level/1.5;
    var name = myData.data[i].Digimon;


    // create the ball object and add it to the array
    var myBall = new Egg(x, y, size, name);
    balls.push(myBall);
  }
}

function draw() {
  background(sfondo);
  for(var j = 0; j < balls.length/4; j++) {
    balls[j].display();
    balls[j].move();
  }

}

function mousePressed() {
  for (var j = 0; j < balls.length; j++) {
    balls[j].click();
    balls[j].testoscompare();
  }
}



function Egg(_x, _y, _diameter, _name) {

    this.size = _diameter;
    this.x = _x;
    this.y = _y;
    this.name=_name;
    this.color = 'white';
	  this.text=14;
    this.font='Georgia'


    // this.img=_img;
     this.speed = 1.5;
    this.yDir = 1;
    this.xDir = 1;

    // Methods
    this.display = function() {
    noStroke();
    image(myEgg,this.x, this.y, this.size, this.size);
    //ellipse(this.x, this.y, this.size);
    }

    this.move = function() {
        this.x += this.speed * this.xDir;
        this.y += this.speed * this.yDir;
        if (this.y >= height || this.y <= 0) {
            this.yDir *= -1;
        }
        if (this.x >= width || this.x <= 0) {
            this.xDir *= -1;
        }
    }

    this.testo = function(){
        textFont(this.font);
      }

      this.click = function() {
          var d = dist(mouseX, mouseY, this.x, this.y);
          if (d < this.size) {
            this.display = function() {
              fill(this.color);
              textFont(this.font);
              textSize(this.text);
              text(this.name,this.x,this.y);
              //image(myMoney,this.x, this.y, this.size, this.size);
              image(myMoney,this.x, this.y, this.size, this.size);
            }
                    }
        }
        this.testoscompare= function(){
          this.testo = function() {

          }
        }


}
