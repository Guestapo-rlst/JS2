// let timerId = setTimeout(sayHello, 3000); // call a function `sayHello` 3000 milliseconds (3 seconds) after the site is loaded 
// clearTimeout(timerId); // makes setTimeout not work

// let timerId = setInterval(sayHello, 3000); // calls a function `sayHello` every 3000 milliseconds
// clearTimeout(timerId); // makes setTimeout stop

// function sayHello() {
//     console.log(`Hello, world!`);
// }

// let timerId = setTimeout(function log() {
//     console.log(`Hello`);
//     setTimeout(log, 2000);
// });

// let btn = document.querySelector(`.btn`),
//     square = document.querySelector(`.box`);

// function myAnimation() {
//     let pos = 0; // position of the element

//     let id = setInterval(frame, 10); // after every 10 ms element does anything in `frame` function
//     function frame() {
//         if (pos == 300) { // if position of the element reached 300, `setInterval` would stop
//             clearInterval(id);
//         } else { // works until `pos` is 300
//             pos++; // increase `pos` by 1
//             square.style.top = pos + `px`; // change style of the element (`square`) so, that the `top` in css is now `pos`pixels (e.g. top: 1px, then top: 2px and so on)
//             square.style.left = pos + `px`; // change css property `left` (e.g. left: 1px, then left: 2px and so on)
//         }
//     }
// }

// btn.addEventListener(`click`, myAnimation); // calls `myAnimation` function on click

// let btnBlock = document.querySelector(`.btn-block`),
//     btns = document.getElementsByTagName(`button`);

// btnBlock.addEventListener(`click`, function(event) { // should add event inside brackets of callback-function, because it is required
//     // if (event.target && event.target.classList.contains(`first`)) { // if target of the event contains `first` class, and we should add `event.target` (required), then the following proceeds
//     if (event.target && event.target.matches(`button.first`)) { // the following code runs if there is `button` with class `first`
//         console.log(`Clicked button`);
//     }
// });

// let elem = document.querySelector(`#elem`);

// function animate({duration, draw, timing}) {
//     let start = performance.now();

//     requestAnimationFrame(function animate(time) {
//         let timeFraction = (time - start) / duration;
//         if (timeFraction > 1) timeFraction = 1;

//         let progress = timing(timeFraction);

//         draw(progress);

//         if (timeFraction < 1) {
//             requestAnimationFrame(animate);
//         }


//     });
// }

// elem.addEventListener('click', function() {
//     animate({
//         duration: 1000,
//         timing: function(timeFraction) {
//             return timeFraction;
//         },
//         draw: function(progress) {
//             elem.style.width = progress * 100 + '%'
//         }
//     });
// });

// document.addEventListener(`click`, function(event) {
//     if (event.target.dataset.counter != undefined) {
//         event.target.value++;
//     }
// });

document.addEventListener(`click`, function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});