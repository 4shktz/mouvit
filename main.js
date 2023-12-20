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
});
  