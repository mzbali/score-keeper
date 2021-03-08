const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const level = document.querySelector('#level');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const reset = document.querySelector('#reset');

let finalScore = parseInt(level.value);
const player1 = { score: 0, scoreSpan: score1, btn: btn1 };
const player2 = { score: 0, scoreSpan: score2, btn: btn2 };

const game = (player, opponent) => {
    player.btn.addEventListener('click', () => {
        player.score++;
        player.scoreSpan.innerText = player.score;
        if (player.score === opponent.score && player.score + opponent.score === 2 * (finalScore - 1)) {
            player.btn.disabled = true;
            opponent.btn.disabled = true;
            player.scoreSpan.classList.add('draw');
            opponent.scoreSpan.classList.add('draw');
        } else if (player.score === finalScore) {
            player.btn.disabled = true;
            opponent.btn.disabled = true;
            player.scoreSpan.classList.add('win');
            opponent.scoreSpan.classList.add('lose');
        }
    })
}

game(player1, player2);
game(player2, player1);

const resetGame = () => {
    player1.score = 0;
    player2.score = 0;
    player1.btn.disabled = false;
    player2.btn.disabled = false;
    player1.scoreSpan.innerText = player1.score;
    player2.scoreSpan.innerText = player2.score;
    player1.scoreSpan.classList.remove('win', 'lose', 'draw');
    player2.scoreSpan.classList.remove('lose', 'win', 'draw');
}

reset.addEventListener('click', resetGame);

level.addEventListener('change', () => {
    resetGame();
    finalScore = parseInt(level.value);
})











