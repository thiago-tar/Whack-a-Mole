const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let timerId = null;
let currentTime = timeLeft.textContent;
function randomSquare(){
    square.forEach(x =>{
        x.classList.remove('mole');
    })

    let randomPosition = square[Math.floor(Math.random() * square.length)]

    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () =>{
        if(id.id === hitPosition){
            clearInterval(timerId);
            randomSquare();
            moveMole();
            result ++;
            score.textContent = result;
        }
    })
});

function moveMole(){
    timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown(){
    currentTime --;
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerCountDown);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is '+ result)
    }
}

let timerCountDown = setInterval(countDown, 1000);
