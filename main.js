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

closeIconSpiderman.addEventListener('click', closeIconDisplay);
document.addEventListener('keydown', closeIconKeyEscSpiderman);

function closeIconDisplay() {
    modalSpiderman.classList.add('hidden');
    modalSpiderman.classList.remove('visible');
};


function modalDisplay() {
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

const nightwingFunFacts = [
    "Nightwing was originally the first Robin, Dick Grayson, before taking on the Nightwing identity.",
    "Dick Grayson/Nightwing is known for his acrobatic skills and martial arts expertise.",
    "Nightwing has been a member of various superhero teams, including the Teen Titans and the Justice League.",
    "His blue and black costume as Nightwing is iconic in the DC Universe.",
];

function getRandomNightwingFunFact() {
    const randomIndex = Math.floor(Math.random() * nightwingFunFacts.length);
    return nightwingFunFacts[randomIndex];
}

function closeIconKeyEscNw(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modalNw.classList.add('hidden');
        modalNw.classList.remove('visible');
        const nightwingFunFact = getRandomNightwingFunFact();
        alert('Fun fact! \n' + nightwingFunFact);
    }
}

closeIconNw.addEventListener('click', closeIconDisplayNw);
document.addEventListener('keydown', closeIconKeyEscNw);

function closeIconDisplayNw() {
    modalNw.classList.add('hidden');
    modalNw.classList.remove('visible');
};


function modalDisplayNw() {
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

const batmanFunFacts = [
    "Batman's secret identity is Bruce Wayne, a billionaire playboy and philanthropist.",
    "The Bat-Signal is used by the Gotham City Police Department to call upon Batman for help.",
    "Batman's utility belt is filled with various gadgets and tools to aid him in his crime-fighting activities.",
    "Gotham City, where Batman operates, is often depicted as a dark and crime-ridden metropolis.",
];

function getRandomBatmanFunFact() {
    const randomIndex = Math.floor(Math.random() * batmanFunFacts.length);
    return batmanFunFacts[randomIndex];
}

function closeIconKeyEscBatman(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        modalBatman.classList.add('hidden');
        modalBatman.classList.remove('visible');
        const batmanFunFact = getRandomBatmanFunFact();
        alert('Fun fact! \n' + batmanFunFact);
    }
}

closeIconBatman.addEventListener('click', closeIconDisplayBatman);
document.addEventListener('keydown', closeIconKeyEscBatman);

function closeIconDisplayBatman() {
    modalBatman.classList.add('hidden');
    modalBatman.classList.remove('visible');
};


function modalDisplayBatman() {
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


const spidermanImage = document.querySelector('#card-1');
let clickCountss = 0;

spidermanImage.addEventListener('click', function () {
    clickCountss++;

    if (clickCountss === 2) {
        openCenteredWindow('https://www.youtube.com/watch?v=JfVOs4VSpmA');
        clickCountss = 0; 
    }
});


const robinImage = document.querySelector('#card-1nw');
let clickCountr = 0;

robinImage.addEventListener('click', function () {
    clickCountr++;

    if (clickCountr === 2) {
        openCenteredWindow('https://www.youtube.com/watch?v=vz3YjAF5mrQ');
        clickCountr = 0; 
    }
});

const batmanImage = document.querySelector('#card-1Batman');
let clickCountb = 0;

batmanImage.addEventListener('click', function () {
    clickCountb++;

    if (clickCountb === 2) {
        openCenteredWindow('https://www.youtube.com/watch?v=EXeTwQWrcwY');
        clickCountb = 0; 
    }
});



const supermanImage = document.querySelector('#superman-image');
let clickCounts = 0;

supermanImage.addEventListener('click', function () {
    clickCounts++;

    if (clickCounts === 2) {
        openCenteredWindow('https://www.youtube.com/watch?v=T6DJcgm3wNY');
        clickCounts = 0; 
    }
});

/*
*   For future superheroes
*/

function attachClickEventToSuperheroImage(imageId, url) {
    const imageElement = document.querySelector(imageId);
    if (imageElement) {
        imageElement.addEventListener('click', function () {
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



//jquery animations

$(document).ready(function () {
    // Animation 1: Rotate the logo
    $(".logo").click(function () {
        $(this).animate({ rotation: 360 }, {
            duration: 1000,
            step: function (now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            }
        });
    });

    // Animation 2: Scale the buttons
    $(".navbar__menu button").hover(function () {
        $(this).animate({ fontSize: '1.2em' }, 200);
    }, function () {
        $(this).animate({ fontSize: '1em' }, 200);
    });

    // Animation 3: Fade in/out Superman image
    $("#superman-image").click(function () {
        $(this).fadeOut(500).fadeIn(500);
    });

    // Animation 4: Scale the children of the section with class main-content (except for h1)
    $(".main-content > :not(h1)").hover(function () {
        $(this).animate({ fontSize: '1.2em' }, 200);
    }, function () {
        $(this).animate({ fontSize: '1em' }, 200);
    });

    // Animation 5: Fade in/out the class modal__content on click
    $(".modal__content").click(function () {
        $(this).fadeOut(500).fadeIn(500);
    });

  
    // Animation 7: (Move element p)
    $(".main-content p").click(function () {
        $(this).animate({ left: '50px' }, 500, function () {
            $(this).animate({ left: '0' }, 500);
        });
    });
});



// JQUERY - Local Storage
$(document).ready(function () {
    // Function to save data to local storage
    function saveToLocalStorage(item) {
        // Check if there's an existing array in local storage
        var savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

        // Add the new item to the array
        savedItems.push(item);

        // Save the updated array back to local storage
        localStorage.setItem("savedItems", JSON.stringify(savedItems));
    }

    // Event listener for modal card clicks (Spiderman)
    $(".modal .cards label").dblclick(function () {
        alert('Added to Cart!')
        // Get the image source URL of the clicked card
        var imgSrc = $(this).find("img").attr("src");

        // Save the image source URL to local storage
        saveToLocalStorage(imgSrc);
    });

    // Event listener for modalNw card clicks (Nightwing)
    $(".modalNw .cardsNw label").dblclick(function () {
        alert('Added to Cart!')
        var imgSrcNw = $(this).find("img").attr("src");
        saveToLocalStorage(imgSrcNw);
    });

    // Event listener for modalBatman card clicks (Batman)
    $(".modalBatman .cardsBatman label").dblclick(function () {
        alert('Added to Cart!')
        var imgSrcBatman = $(this).find("img").attr("src");
        saveToLocalStorage(imgSrcBatman);
    });

});


$(document).ready(function() {
    $('.addToCartButton').on('click', function() {
        const parentLabel = $(this).closest('label').attr('for');
        const imageUrl = $(this).siblings('img').attr('src');
        saveImageAndParentToLocalStorage(imageUrl, parentLabel);
    });

    // Function to save image and parent label to local storage
    function saveImageAndParentToLocalStorage(imageUrl, parentLabel) {
        if (typeof Storage !== 'undefined') {
            let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            cartItems.push({ imageUrl: imageUrl, parentLabel: parentLabel });
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } else {
            alert('Sorry, your browser does not support local storage.');
        }
    }
});



