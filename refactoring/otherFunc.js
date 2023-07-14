
export function checkCollision(pipes, bird) {
    for(let i = 0; i < pipes.position.length; i++) {
        let p = pipes.position[i];

  let topPipeBottomY = p.y + pipes.h;
  let bottomPipeTopY = p.y + pipes.h + pipes.gap;
  // top pipe
  if (
    bird.coords.x + bird.radius > p.x &&
    bird.coords.x - bird.radius < p.x + pipes.w &&
    bird.coords.y + bird.radius > p.y &&
    bird.coords.y - bird.radius < topPipeBottomY
  ) {
    return true;
  }
  // bottom pipe
  if (
    bird.coords.x + bird.radius > p.x &&
    bird.coords.x - bird.radius < p.x + pipes.w &&
    bird.coords.y + bird.radius > bottomPipeTopY &&
    bird.coords.y - bird.radius < bottomPipeTopY + pipes.h
  ) {
    return true;
  }
  
  return false;
}
}

export function upLvl(score, lvl, pipes) {
  if (score.value <= 5) {
    lvl.current = lvl.easy;
    pipes.speedIdx = 1;
  }

  if (score.value > 5 && score.value <= 15) {
    lvl.current = lvl.normal;
    pipes.speedIdx = 1.5;
  }

  if (score.value > 15) {
    lvl.current = lvl.hard;
    pipes.speedIdx = 2;
  }
}

