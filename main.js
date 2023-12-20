document.addEventListener('keydown', function(e) {
    let cursor = document.querySelector('#cursor');
    let left = parseInt(cursor.style.left) || 0;
    let top = parseInt(cursor.style.top) || 0;
  
    if (e.key === 'ArrowLeft') {
        left -= 10;
        console.log('gauche');
    }
    if (e.key === 'ArrowRight') {
        left += 10;
        console.log('droite');
    }
    if (e.key === 'ArrowUp') {
        top -= 10;
        console.log('haut');
    }
    if (e.key === 'ArrowDown') {
        top += 10;
        console.log('bas');
    }
  
    cursor.style.left = left + 'px';
    cursor.style.top = top + 'px';

    function HeightBonus() {
        let bonus = document.createElement('div');
        bonus.id = 'bonus';
        bonus.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        bonus.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
        document.body.appendChild(bonus);
    
        bonus.addEventListener('click', () => {
            cursor.style.width = parseInt(cursor.style.width) + 10 + 'px';
            cursor.style.height = parseInt(cursor.style.height) + 10 + 'px';
            document.body.removeChild(bonus);
        });
    }
    
    if (Math.random() < 0.01) {
        HeightBonus();
    }
});