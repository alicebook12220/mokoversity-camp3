/*jslint browser: true, devel: true, closure: true */

var gameModule = (function (document, $) {

    "use strict";

    var counter = 0,
        ballX,
        ballY,
        ballR,
        scores,
        colors = ['#ff0000', '#0000ff', 'yellow'],
        length = colors.length;

    function gameOver() {
        console.log("Final: " + scores);

        var api = "http://127.0.0.1:3000/scores?scores=" + scores;

        $.ajax({ url: api});
    }

    function startGame() {
        var canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d');

        ballX = Math.floor(Math.random() * 600); // 0..300
        ballY = Math.floor(Math.random() * 450);
        ballR = Math.floor(Math.random() * 80);

        canvas.width = 640;
        canvas.height = 480;

        ctx.fillStyle = colors[counter % length];
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
        ctx.fill();

        if (counter >= 7) {
            gameOver();
        } else {
            setTimeout(startGame, 1000);
            counter = counter + 1;
        }
    }

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);

        console.log("Clicked: " + x + " , " + y);

        if (tmp < ballR * ballR) {
            scores = scores + (100 - ballR);
            console.log("Hit ! Your scores: " + scores);
        }
    }

    function start() {
        scores = 0;

        document.getElementById("main").addEventListener("click", touchEvent, false);
        startGame();
    }

    return {
        start: start
    };

}(document, $));

gameModule.start();