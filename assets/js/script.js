const inputs = document.querySelectorAll('.hidden');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        input.removeAttribute('placeholder');
    });

    input.addEventListener('blur', function() {
        input.setAttribute('placeholder', 'Digite um nome');
    });
});

// Scoreboard 1
const plusScoreboard1 = document.querySelector('#plus-scoreboard-1');
const minusScoreboard1 = document.querySelector('#minus-scoreboard-1');
const scoreScoreboard1 = document.querySelector('#score-scoreboard-1');
const buttomResetScoreboard1 = document.querySelector('#reset-score-scoreboard-1')

let addPointScoreboard1 = 0;

plusScoreboard1.addEventListener('click', function() {    
    if (addPointScoreboard1 < 99 ) {
        scoreScoreboard1.innerHTML = addPointScoreboard1 += 1;
    }
})

minusScoreboard1.addEventListener('click', function() {  
    if (addPointScoreboard1 > 0 ) {
        scoreScoreboard1.innerHTML = addPointScoreboard1 -= 1;
    }
})

buttomResetScoreboard1.addEventListener('click', function() {
    resetScoreScoreboard1();
})

function resetScoreScoreboard1() {
    addPointScoreboard1 = 0;
    scoreScoreboard1.innerHTML = 0;
}

// Scoreboard 2
const plusScoreboard2 = document.querySelector('#plus-scoreboard-2');
const minusScoreboard2 = document.querySelector('#minus-scoreboard-2');
const scoreScoreboard2 = document.querySelector('#score-scoreboard-2');
const buttomResetScoreboard2 = document.querySelector('#reset-score-scoreboard-2')

let addPointScoreboard2 = 0;

plusScoreboard2.addEventListener('click', function() {
    if (addPointScoreboard2 < 99 ) {
        scoreScoreboard2.innerHTML = addPointScoreboard2 += 1;
    }
})

minusScoreboard2.addEventListener('click', function() {
    if (addPointScoreboard2 > 0 ) {
        scoreScoreboard2.innerHTML = addPointScoreboard2 -= 1;
    }
})

buttomResetScoreboard2.addEventListener('click', function() {
    resetScoreScoreboard2();
})

function resetScoreScoreboard2() {
    addPointScoreboard2 = 0;
    scoreScoreboard2.innerHTML = 0;
}