var isKeyDown = false;

window.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        isKeyDown = true;
    }
});

window.addEventListener('keyup', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        isKeyDown = false;
    }
});

function moverD(){
    if (isKeyDown) {
        var player = document.querySelector('.player');
        var currentPosition = parseInt(player.style.left = '0px');
        player.style.left = currentPosition + 10 + 'px';
    }
    requestAnimationFrame(moverD);
}

requestAnimationFrame(moverD);