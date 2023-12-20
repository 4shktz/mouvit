let cursor = document.querySelector('#cursor');
let speed = 20;

document.addEventListener('keydown', (e) => {
    let left = parseInt(cursor.style.left) || 0;
    let top = parseInt(cursor.style.top) || 0;

    switch (e.key) {
        case 'ArrowLeft':
            left -= speed;
            console.log('gauche');
            break;
        case 'ArrowRight':
            left += speed;
            console.log('droite');
            break;
        case 'ArrowUp':
            top -= speed;
            console.log('haut');
            break;
        case 'ArrowDown':
            top += speed;
            console.log('bas');
            break;
        default:
            break;
    }

    if (left < 0 || left > window.innerWidth || top < 0 || top > window.innerHeight) {
        alert('Vous avez touché un mur. Vous avez perdu !!');
        window.location.reload();
        return; 
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

        if (Math.abs(left - bonusLeft) <= 40 && Math.abs(top - bonusTop) <= 40) {
            cursor.style.width = (parseInt(cursor.style.width) + 10) + 'px';
            cursor.style.height = (parseInt(cursor.style.height) + 10) + 'px';
            console.log('Bonus!');
            document.body.removeChild(bonus);
            HeightBonus();
        }
    }

    if (!bonus) {
        if (Math.random() < 1) {
            HeightBonus();
        }
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        let divVitesse = document.querySelector('#vitesse');

        if (divVitesse) {
            document.body.removeChild(divVitesse);
        } else {
            divVitesse = document.createElement('div');
            divVitesse.id = 'vitesse';

            let infoDiv = document.createElement('div');
            infoDiv.style.backgroundColor = 'white';
            infoDiv.style.padding = '20px';
            infoDiv.style.borderRadius = '5px';

            let vitesseInfo = document.createElement('p');
            vitesseInfo.textContent = `Vitesse: ${speed}`;

            let lessBtn = document.createElement('button');
            lessBtn.textContent = '-';
            lessBtn.addEventListener('click', () => {
                speed -= 5;
                vitesseInfo.textContent = `Vitesse: ${speed}`;
                console.log(speed);
            });

            let moreBtn = document.createElement('button');
            moreBtn.textContent = '+';
            moreBtn.addEventListener('click', () => {
                speed += 5;
                vitesseInfo.textContent = `Vitesse: ${speed}`;
                console.log(speed);
            });

            infoDiv.appendChild(vitesseInfo);
            infoDiv.appendChild(lessBtn);
            infoDiv.appendChild(moreBtn);
            divVitesse.appendChild(infoDiv);
            document.body.appendChild(divVitesse);
        }
    }
});