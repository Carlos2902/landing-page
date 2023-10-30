/*
*   Spiderman
*/

const spidermanButton = document.querySelector('#spider-button1');
const modalSpiderman = document.querySelector('.modalSpiderman');
const closeIconSpiderman = document.querySelector('.modal__content--close');

spidermanButton.addEventListener('click', modalDisplay);

function closeIconKeyEsc(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modalSpiderman.classList.add('hidden');
        modalSpiderman.classList.remove('visible');
    }
}

closeIconSpiderman.addEventListener('click',closeIconDisplay);
document.addEventListener('keydown', closeIconKeyEsc);

function closeIconDisplay(){
        modalSpiderman.classList.add('hidden');
        modalSpiderman.classList.remove('visible');
};


function modalDisplay(){
    modalSpiderman.classList.remove('hidden');
    modalSpiderman.classList.add('visible');
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







/*
*   Batman
*/

const batmanButton = document.querySelector('#batman-button1');
const modalBatman = document.querySelector('.modalBatman')
const closeIconBatman = document.querySelector('.modalBatman__content--close');


batmanButton.addEventListener('click', modalDisplayBatman);

function closeIconKeyEscBatman(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modalBatman.classList.add('hidden');
        modalBatman.classList.remove('visible');
    }
}

closeIconBatman.addEventListener('click',closeIconDisplayBatman);
document.addEventListener('keydown', closeIconKeyEscBatman);

function closeIconDisplayBatman(){
    modalBatman.classList.add('hidden');
    modalBatman.classList.remove('visible');
};


function modalDisplayBatman(){
    modalBatman.classList.remove('hidden');
    modalBatman.classList.add('visible');
};



/*
*   Event listeners on images
*/



function openCenteredWindow(url) {
    var width = 400;
    var height = 200;
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    var features = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    var centeredWindow = window.open(url, 'Centered Window', features);
    centeredWindow.focus();
  }


const spidermanImage = document.querySelector('#card-1')
spidermanImage.addEventListener('click', function() {
        openCenteredWindow('https://www.youtube.com/watch?v=JfVOs4VSpmA');
    })

const robinImage = document.querySelector('#card-1nw')
robinImage.addEventListener('click', function() {
    openCenteredWindow('https://www.youtube.com/watch?v=vz3YjAF5mrQ');
})

const batmanImage = document.querySelector('#card-1Batman')
batmanImage.addEventListener('click', function(){
    openCenteredWindow('https://www.youtube.com/watch?v=EXeTwQWrcwY')
})


const supermanImage = document.querySelector('#superman-image')
supermanImage.addEventListener('click', function(){
    openCenteredWindow('https://www.youtube.com/watch?v=T6DJcgm3wNY')
})


const body = document.body;

const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
body.appendChild(customCursor);

body.addEventListener('mousemove', (e) => {
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});

const hoverElements = document.querySelectorAll('.hover-effect-element');
hoverElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    customCursor.classList.add('hover-effect');
  });
  element.addEventListener('mouseleave', () => {
    customCursor.classList.remove('hover-effect');
  });
});
