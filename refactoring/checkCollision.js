
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

