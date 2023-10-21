const spidermanButton = document.querySelector('#spider-button1');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal__content--close');


closeIcon.addEventListener('click',closeIconDisplay);
document.addEventListener('keydown', closeIconKeyEsc);
spidermanButton.addEventListener('click', modalDisplay);


function closeIconDisplay(){
        modal.classList.add('hidden');
        modal.classList.remove('visible');
};


function closeIconKeyEsc(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modal.classList.add('hidden');
        modal.classList.remove('visible');
    }
}

function modalDisplay(){
    modal.classList.remove('hidden');
    modal.classList.add('visible');
};


