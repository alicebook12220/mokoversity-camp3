var gameModule = (function(){
  var timeoutVar,
      counter = 0,
      ballX,
      ballY,
      ballR,

      colors = ['#ff0000', '#0000ff', 'yellow'],
      length = colors.length;

  function touchEvent(evt){
    var x=evt.clientX,
        y=evt.clientY;
        tmp=(ballX-x)*(ballX-x)+(ballY-y)*(ballY-y);

    console.log("Clicked: "+x+" , "+y);

    if(tmp<ballR*ballR){

      console.log("Hit! your scores: ");
    }
  }

  function start(){

    document.getElementById("main").addEventListener("click", touchEvent,false);
    startGame();
  }

  function startGame(){
    var canvas=document.getElementById("game");
  var ctx=canvas.getContext("2d");

      ballX=Math.floor(Math.random()*600); 
      ballY=Math.floor(Math.random()*450);
      ballR=Math.floor(Math.random()*80);

  canvas.width = 640;
  canvas.height = 480;

  ctx.fillStyle =colors[counter % length];
  ctx.beginPath();
  ctx.arc(ballX,ballY,ballR,0,2*Math.PI,true);
  ctx.fill();

    if(counter >= 10){
      GameOver();
    }else{
      timeoutVar = setTimeout(startGame,1000);
      counter = counter + 1;
    }
    function GameOver(){
      console.log("Final: "+scores);
    }
  }
  return{
    start:start
  }
})();
gameModule.start();