# refactoring
Здравствуйте (Алексей). Переделала код по флаппи берд с использованием классов. Посмотрите, пжл. 
Ваш предыдущий отзыв:


Мария Александровна, Добрый день! Даю обратную связь по Вашей работе:
Понравилось в работе:
1)Очень хорошая настройка скорости игры, она невысокая и плавная,  
высота труб динамические меняется при прогрессе, также если обновлять страницу 
и начинать игру заново высота труб в игре тоже обновляется, отлично настроено 
движение птицы по клику, высота при клике не сильно меняется и играть становится 
комфортно, очень хорошо, что добавили звуковые эффекты в игре, Молодец!
2)https://skr.sh/sKI44A69ENU?a  вместо получения свойств объекта startBtn 
рекомендую использовать деструктуризацию объекта для получения этих свойств 
непосредственно в переменные.
cvs.addEventListener("click", (evt) => {
  const { current } = state;
  const { x, y, w, h } = startBtn;
}
3)https://skr.sh/sKIf6SegNA1?a тут также можно использовать деструктуризацию 
и  вместо повторного вызова ctx.drawImage() для отображения двух частей фона,
можно вынести эту логику в отдельный метод, чтобы код был более модульным.
const bg = {
  sX: 0,
  sY: 0,
  w: 275,
  h: 226,
  x: 0,
  y: cvs.height - 226,

  draw: function () {
    const { sX, sY, w, h, x, y } = this;
    this.drawBackgroundPart(sX, sY, w, h, x, y);
    this.drawBackgroundPart(sX, sY, w, h, x + w, y);
  },

  drawBackgroundPart: function (sX, sY, w, h, x, y) {
    ctx.drawImage(sprite, sX, sY, w, h, x, y, w, h);
  },
};
С foreground можно сделать по аналогии.
4)https://skr.sh/sKIH0HWqfCh?a можно вынести условие для проверки 
столкновений с трубами в отдельную функцию
function checkCollision(pipe, bird) {
  let topPipeBottomY = pipe.y + pipes.h;
  let bottomPipeTopY = pipe.y + pipes.h + pipes.gap;
  // Проверяем столкновение с верхней трубой
  if (
    bird.x + bird.radius > pipe.x &&
    bird.x - bird.radius < pipe.x + pipes.w &&
    bird.y + bird.radius > pipe.y &&
    bird.y - bird.radius < topPipeBottomY
  ) {
    return true;
  }
  // Проверяем столкновение с нижней трубой
  if (
    bird.x + bird.radius > pipe.x &&
    bird.x - bird.radius < pipe.x + pipes.w &&
    bird.y + bird.radius > bottomPipeTopY &&
    bird.y - bird.radius < bottomPipeTopY + pipes.h
  ) {
    return true;
  }
  return false;
}
Далее используем в методе update
  // Проверяем столкновение с текущей трубой
    if (checkCollision(p, bird)) {
      state.current = state.over;
      HIT.play();
    }
Вы хорошо справились с таким тяжелым заданием, рекомендую, если будет 
свободное время попробовать переписать логику на классы(знаю, что это тяжело, 
но на сущности Вы уже логику разбили при решении).
Полезные ссылки:
1)https://learn.javascript.ru/classes
Удачи в дальнейшем обучении).
Работу проверил ментор Алексей Кропотин.
В случае возникновения вопросов обращайтесь, пожалуйста, в канал по разделу #react_js_фреймворки.


Деструктуризация со "state'ом" в модулях не получилась почему-то, все ломалось...
