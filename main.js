document.addEventListener('keydown', function(e) {
    let cursor = document.querySelector('#cursor');
    let left = parseInt(cursor.style.left) || 0;
    let top = parseInt(cursor.style.top) || 0;

    switch (e.key) {
        case 'ArrowLeft':
            left -= 10;
            console.log('gauche');
            break;
        case 'ArrowRight':
            left += 10;
            console.log('droite');
            break;
        case 'ArrowUp':
            top -= 10;
            console.log('haut');
            break;
        case 'ArrowDown':
            top += 10;
            console.log('bas');
            break;
        default:
            break;
    }

    cursor.style.left = left + 'px';
    cursor.style.top = top + 'px';

    let bonus = document.querySelector('#bonus');

    function HeightBonus() {
        let bonus = document.createElement('div');
        bonus.id = 'bonus';
        bonus.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        bonus.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
        document.body.appendChild(bonus);
    }

    if (bonus) {
        let bonusLeft = parseInt(bonus.style.left) || 0;
        let bonusTop = parseInt(bonus.style.top) || 0;

        if (Math.abs(left - bonusLeft) <= 10 && Math.abs(top - bonusTop) <= 10) {
            cursor.style.width = parseInt(cursor.style.width) + 10 + 'px';
            cursor.style.height = parseInt(cursor.style.height) + 10 + 'px';
            document.body.removeChild(bonus);
        }
    }

    if (Math.random() < 0.01) {
        HeightBonus();
    }
});
