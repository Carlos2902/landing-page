// video.js
console.log('video.js working')

$(document).ready(function () {
    // Animation 1: Rotate the logo
    $('.logo').on('mouseenter', function () {
      $(this).toggleClass('rotate');
    });
  
    // Animation 2: Fade in the Jumbotron text
    $('.bg-image .text-white').addClass('fade-in');
  
    // Animation 3: Slide up the "Top Picks" section
    $('.mt-5').addClass('slide-up');
  
    // Animation 4: Card hover effect - Fade in on hover
    $('.card').hover(
      function () {
        $(this).find('.btn-md').fadeIn();
      },
      function () {
        $(this).find('.btn-md').fadeOut();
      }
    );
  
    // Animation 5: Show animations tab on button click
    $('#showAnimations').on('click', function () {
      $('#navId a[href="#tab5Id"]').tab('show');
    });
  
    // Animation 6: Clicking on the "Watch Video" button scales it up
    $('.btn-md').on('click', function () {
      $(this).toggleClass('animated-element');
    });
  
    // Animation 7: Clicking on social media icons adds a rotate class
    $('.btn-floating').on('click', function () {
      $(this).toggleClass('rotate');
    });
  
    // Animation 8: Toggle the fade-in class on click
    $('.fade-in').on('click', function () {
      $(this).toggleClass('show');
    });
  });
  