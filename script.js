'use strict';

//selecting the elements

let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let btnRoll = document.querySelector('.btn--roll');
let dice1 = document.querySelector('.dice');

let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let name0EL = document.getElementById('name--0');
let name1EL = document.getElementById('name--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

//project variables
let secretNo;
let p0Current;
let p1Current;
let p0Score;
let p1Score;
let p0Select;
let p1Select;
let currentPlayer;
let scoreHold;
let playing;


//starting conditions
dice1.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
p0Current = 0;
p1Current = 0;
p0Score = 0;
p1Score = 0;
scoreHold = 0;
let testBool = true;
p0Select = true;
playing = true;


//eventlistner functions

function g1() {
    secretNo = Math.trunc(Math.random() * 6 + 1);
    if (playing) {
        dice1.classList.remove('hidden');
        dice1.src = `dice-${secretNo}.png`;



        if (secretNo === 1 || score0El > 100 || scoreHold === 1 || score1El > 100) {
            testBool = testBool ? false : true;
            console.log(testBool)
            p0Select = testBool;
            scoreHold = 0;
        }
        p1Select = !p0Select;

        if (p0Select && secretNo !== 1) {
            player0.classList.add('player--active');
            player1.classList.remove('player--active');
            p0Current = p0Current + secretNo;
            current0El.textContent = p0Current;
            p1Current = 0;
            current1El.textContent = p1Current;
        } else if (p1Select && secretNo !== 1) {
            player1.classList.add('player--active');
            player0.classList.remove('player--active');
            p1Current = p1Current + secretNo;
            current1El.textContent = p1Current;
            p0Current = 0;
            current0El.textContent = p0Current;
        }
    }

}

function g2() {
    if (playing) {
        scoreHold = 1;
        if (p0Score <= 100 && p0Select) {
            p0Score = p0Score + p0Current;
            score0El.textContent = p0Score;
            p0Current = 0;
            current0El.textContent = p0Current;
        } else if (p1Score <= 100 && p1Select) {
            p1Score = p1Score + p1Current;
            score1El.textContent = p1Score;
            p1Current = 0;
            current1El.textContent = p1Current;
        }
        else {
            console.log("hello")
        }
    }
    if (p0Score >= 100) {
        // Finish the game
        playing = false;
        dice1.classList.add('hidden');

        player0.classList.add('player--winner');
        player0.classList.remove('player--active');
    }
    if (p1Score >= 100) {
        // Finish the game
        playing = false;
        dice1.classList.add('hidden');

        player1.classList.add('player--winner');
        player1.classList.remove('player--active');
    }
}

btnRoll.addEventListener('click', g1)
btnHold.addEventListener('click', g2)

