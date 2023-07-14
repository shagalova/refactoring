import Canvas from "./canvas.js";
import {cvs, state, startBtn, lvl} from "./config.js";
import vars from "./gameVars.js";
import Background from "./bg.js";
import Foreground from "./fg.js";
import Bird from "./bird.js";
import Pipe from "./pipes.js";
import GetReadyMessage from "./getReadyMessage.js";
import GameOverMessage from "./gameOverMessage.js";
import Score from "./score.js";
import Medals from "./medals.js";

import { upLvl } from "./otherFunc.js";

//load sprite image

const sprite = new Image();
sprite.src = "images/sprite.png";


//game elements
const canvas = new Canvas();
const bg = new Background(sprite);
const fg = new Foreground(sprite);
const bird = new Bird(sprite);
const pipes = new Pipe(sprite);
const getReadyMessage = new GetReadyMessage(sprite);
const gameOverMessage = new GameOverMessage(sprite);
const score = new Score();
const medals = new Medals(sprite);
const SWOOSHING = new Audio("./audio/swooshing.wav");
const FLAP = new Audio("./audio/flap.wav");


cvs.addEventListener("click", (evt) => {

      switch(state.current) {
          case state.getReady:
            state.current = state.game;
              SWOOSHING.play(); 
              break;
          case state.game:
              if(bird.coords.y - bird.radius <= 0) 
              return;
              bird.flap();
              FLAP.play();
              break;
          case state.over:
              let rect = cvs.getBoundingClientRect();
              let clickX = evt.clientX - rect.left;
              let clickY = evt.clientY - rect.top;
  
              //check if we click on the start button
              if(clickX >= startBtn.x && 
                 clickX <= startBtn.x + startBtn.w &&
                 clickY >= startBtn.y &&
                 clickY <= startBtn.y + startBtn.h) {
                  pipes.reset();
                  bird.speedReset();
                  score.reset();
                  state.current = state.getReady;
                 }           
              break;
      }
  })



function draw() {
    canvas.draw();
    bg.draw();
    
    pipes.draw();
    fg.draw();
    bird.draw();
    getReadyMessage.draw();
    gameOverMessage.draw();
    score.draw();
    medals.draw(score);
   
}

//update
function update() {
    fg.update();
    bird.update(fg);
    pipes.update(bird, score);
    upLvl(score, lvl, pipes)

}

//loop 
function loop() {
    update();
    draw();
    vars.frames++;

    requestAnimationFrame(loop);
}
loop()