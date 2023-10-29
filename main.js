/*
*   Spiderman
*/

const spidermanButton = document.querySelector('#spider-button1');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal__content--close');

spidermanButton.addEventListener('click', modalDisplay);

function closeIconKeyEsc(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    }
}

closeIcon.addEventListener('click',closeIconDisplay);
document.addEventListener('keydown', closeIconKeyEsc);

function closeIconDisplay(){
        modal.classList.add('hidden');
        modal.classList.remove('visible');
};


function modalDisplay(){
    modal.classList.remove('hidden');
    modal.classList.add('visible');
};

/*
*   Nightwing
*/

const nightwingButton = document.querySelector('#nightwing-button1');
const modalNw = document.querySelector('.modalNw')
const closeIconNw = document.querySelector('.modalNw__content--close');


nightwingButton.addEventListener('click', modalDisplayNw);

function closeIconKeyEscNw(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modalNw.classList.add('hidden');
        modalNw.classList.remove('visible');
    }
}

closeIconNw.addEventListener('click',closeIconDisplayNw);
document.addEventListener('keydown', closeIconKeyEscNw);

function closeIconDisplayNw(){
    modalNw.classList.add('hidden');
    modalNw.classList.remove('visible');
};


function modalDisplayNw(){
    modalNw.classList.remove('hidden');
    modalNw.classList.add('visible');
};









