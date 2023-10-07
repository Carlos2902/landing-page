const spidermanButton = document.querySelector('#spider-button1');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal__content--close');


closeIcon.addEventListener('click',closeIconDisplay);
spidermanButton.addEventListener('click', modalDisplay);


function closeIconDisplay(){
        console.log('here');
        modal.classList.add('hidden');
        modal.classList.remove('visible');
};


function modalDisplay(){
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    
    
    closeIcon();
};