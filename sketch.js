var engine, world;
var backgroundImg;
var bg = "snow.webp";

    const Engine = Matter.Engine;
    const World= Matter.World;  
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;



    //snow1 = new Snow1()

    function setup() {
      var canvas = createCanvas(1200,400);
      engine = Engine.create();
      world = engine.world;
    }

    function draw() {
      backgroundImg('snow4.webp');
      
      
      Engine.update(engine);  
      drawSprites();
    }



    async function getBackgroundImg(){
      var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
      var responseJSON = await response.json();
  
      var datetime = responseJSON.datetime;
      var hour = datetime.slice(11,13);
      if(hour>=06 && hour<=14){
        bg = "snow4";
    }
    else{
        bg = "snow5";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}