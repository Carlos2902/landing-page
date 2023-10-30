/*
*   Spiderman
*/

const spidermanButton = document.querySelector('#spider-button1');
const modalSpiderman = document.querySelector('.modal');
const closeIconSpiderman = document.querySelector('.modal__content--close');

spidermanButton.addEventListener('click', modalDisplay);

function closeIconKeyEscSpiderman(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modalSpiderman.classList.add('hidden');
        modalSpiderman.classList.remove('visible');
    }
}

closeIconSpiderman.addEventListener('click',closeIconDisplay);
document.addEventListener('keydown', closeIconKeyEscSpiderman);

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

/*
*   For future superheroes
*/

function attachClickEventToSuperheroImage(imageId, url) {
    const imageElement = document.querySelector(imageId);
    if (imageElement) {
      imageElement.addEventListener('click', function() {
        openCenteredWindow(url);
      });
    }
  }

function setCursorColor(color) {
document.body.style.cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="fill: ${color};" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" version="1.1" class="iconify iconify--twemoji" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></g><g id="SVGRepo_iconCarrier"> <path d="M512 128C283.008 128 96 315.008 96 544s187.008 416 416 416 416-187.008 416-416S740.992 128 512 128z m0 724.992c-194.064 0-352-157.936-352-352s157.936-352 352-352 352 157.936 352 352-157.936 352-352 352z m0-99.992a252.248 252.248 0 0 1-190.96-87.016c-6.016-6.992-19.6-6.288-25.512 1.704-6.992 6.016-6.288 19.6 1.704 25.512 50.8 59.256 135.112 95.8 216.768 95.8s165.968-36.544 216.768-95.8c6.992-6.016 19.6-6.72 25.512-1.704 6.016 6.992 6.72 19.6 1.704 25.512-49.88 46.208-114.552 72.992-183.968 72.992z" fill="#000000" /></g></svg>'), auto`;
}



/*
*   Mouse Hovering features
*
*/


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


function getRandomComicFunFact() {
    const dcFunFacts = [
      "In the 'Crisis on Infinite Earths' storyline, Barry Allen (The Flash) sacrifices himself to save the multiverse.",
      "The 'Death of Superman' storyline saw Superman battling and ultimately being killed by the villain Doomsday.",
      "Batman's back was broken by the villain Bane in the 'Knightfall' storyline.",
    ];
  
    const marvelFunFacts = [
      "The 'Infinity Gauntlet' storyline featured Thanos assembling all the Infinity Gems and becoming nearly omnipotent.",
      "In 'The Clone Saga,' Spider-Man faced a clone of himself, leading to the introduction of Ben Reilly, the Scarlet Spider.",
      "The 'Dark Phoenix Saga' in the X-Men comics revolves around Jean Grey becoming the immensely powerful and destructive Dark Phoenix.",
    ];
  
    const isDC = Math.random() < 0.5; // Randomly choose between DC and Marvel
  
    const funFact = isDC
      ? dcFunFacts[Math.floor(Math.random() * dcFunFacts.length)]
      : marvelFunFacts[Math.floor(Math.random() * marvelFunFacts.length)];
  
    alert('Fun fact! \n' + funFact);
  }
  
  getRandomComicFunFact();
  
