/*Web Animations API*/
const box = document.querySelector(".box");
console.log(box);


/*Define animation and timing models*/
let whiteSquareTranslate = [
    {transform: 'translateX(-500px)'},
    {transform: 'translateX(300px)'}
]

let whiteSquareTiming = {
    fill: 'forwards',
    duration: 4000
}

/*Playback control functions*/
const animateBox = box.animate(whiteSquareTranslate, whiteSquareTiming); 
animateBox.pause();

function playAnimation(){
    animateBox.play()
}

function reverseAnimation(){
    animateBox.reverse();
}

/*Event Control*/

/*Play animation on mouse over*/
box.addEventListener("click", playAnimation);

/*Reverse animation on mouse out*/
box.addEventListener("mouseout", reverseAnimation);




