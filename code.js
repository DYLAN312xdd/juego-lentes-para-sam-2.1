var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sprite = createSprite(32, 200, 64, 155);
sprite.shapeColor ="darkred";

var tiendadelentes = createSprite(368, 200, 64, 155);
tiendadelentes.shapeColor ="pink";

var borde1 = createSprite(200, 120,400,3);
borde1.shapeColor ="grey";
var borde2 = createSprite(200, 280,400,3);
borde2.shapeColor = "grey";


var carretera = createSprite(200, 200, 270, 155);
carretera.shapeColor = "black";

var gameState = "serve";
var vidas = 0;

var linea1 = createSprite(120, 200, 50, 10);
linea1.shapeColor ="yellow";

var linea2 = createSprite(200, 200, 50, 10);
linea2.shapeColor ="yellow";

var linea3 = createSprite(280, 200,50, 10);
linea3.shapeColor ="yellow";

var coche1 = createSprite(215, 130,15,15);
coche1.shapeColor = "blue";
coche1.velocityY=9;
var coche2 = createSprite(160, 270,15,15);
coche2.shapeColor = "green";
coche2.velocityY=-9;
var coche3 = createSprite(105, 130,15,15);
coche3.shapeColor = "yellow";
coche3.velocityY=9;
var coche4 = createSprite(270, 270,15,15);
coche4.shapeColor = "orange";
coche4.velocityY=-9;

var Sam = createSprite(10, 200,15,15);
Sam.shapeColor = "red";



text("text", 0, 15);



function draw() {
  
  background("white")
coche1.bounceOff(borde1) 
coche1.bounceOff(borde2)

coche2.bounceOff(borde1)
coche2.bounceOff(borde2)

coche3.bounceOff(borde1)
coche3.bounceOff(borde2)

coche4.bounceOff(borde1)
coche4.bounceOff(borde2)




Sam.velocityX=0;

if (keyDown("RIGHT_ARROW")) {
  Sam.velocityX=2.5;
}

if (keyDown("LEFT_ARROW")) {
  Sam.velocityX=-2.5;
}

if (Sam.isTouching(coche1)||Sam.isTouching(coche2)||Sam.isTouching(coche3)||Sam.isTouching(coche4)) {
  Sam.x=10;
  Sam.y=200;
vidas = vidas +1;
  playSound("assets/default.mp3", false);
  
}
textSize(25);
text("vidas:"+ vidas, 300, 20);

createEdgeSprites();
Sam.collide(edges);



if (Sam.isTouching(tiendadelentes)) {
  textSize(20)
  stroke("red");
  text("Sam tiene lentes bien hecho",30, 30);
  Sam.velocityX=0;
coche1.velocityY=0;
coche2.velocityY=0;
coche3.velocityY=0;
coche4.velocityY=0;  
}
textSize(12);
text("tienda de lentes", 310, 115);

textSize(12);
text("casa de Sam",10, 115);

textSize(12);
text("preciona la flchita a la isquierda para moverte a la isquierda", 0, 365);

textSize(12);
text("preciona la flechita hacia la derecha para moverte a la derecha", 0, 380)

textSize(15)
text("ayuda a Sam a llegar a la tienda de lentes",60, 315);


  drawSprites()
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
