const person = document.querySelector('.person');
const cacto = document.querySelector('.cacto');
const gameOver = document.querySelector('.gameOver');

const jump = () => {
    person.classList.add('jump');
    
    setTimeout(() =>{

        person.classList.remove('jump');

    }, 500)
}

const loopEventGame = setInterval(() =>{

    const cactoPosition = cacto.offsetLeft;
    const personPosition = +window.getComputedStyle(person).bottom.replace('px', '');
    const gameOverPosition = gameOver.offsetLeft;

    console.log(personPosition);
    
    if(cactoPosition <= 110 && cactoPosition > personPosition && personPosition < 65 ) {

        cacto.style.animation = 'none';
        cacto.style.left = `${cactoPosition}px`;

        person.style.animation = 'none';
        person.style.bottom = `${personPosition}px`;

        gameOver.style.visibility = 'visible';
        
        clearInterval(loopEventGame);

    }

}, 10);


document.addEventListener('keydown', jump);