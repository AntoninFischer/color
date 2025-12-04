document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');
    const gameArea = document.getElementById('game-area');
    const scoreEl = document.getElementById('score');
    const timerEl = document.getElementById('timer');
    const startBtn = document.getElementById('start');

    let score = 0;
    let time = 30;
    let interval;

    function randomColor() {
        const colors = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function moveBall() {
        const maxX = gameArea.clientWidth - ball.clientWidth;
        const maxY = gameArea.clientHeight - ball.clientHeight;
        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
        ball.style.backgroundColor = randomColor();
    }

    ball.onclick = () => {
        score++;
        scoreEl.textContent = score;
        moveBall();
    };

    startBtn.onclick = () => {
        score = 0;
        time = 30;
        scoreEl.textContent = score;
        timerEl.textContent = time;
        moveBall();
        ball.style.display = 'block';
        startBtn.disabled = true;

        interval = setInterval(() => {
            time--;
            timerEl.textContent = time;
            if (time <= 0) {
                clearInterval(interval);
                ball.style.display = 'none';
                alert(`Konec hry! Tvoje skóre: ${score}`);
                startBtn.disabled = false;
            }
        }, 1000);
    };
});
