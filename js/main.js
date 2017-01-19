var $sectionWrapper = $('.section_wrapper').isotope({
  // options
  itemSelector: '.div_container',
  layoutMode: 'masonry'
});

$('.panel_ul').on('click', 'a', function(e) {
  e.preventDefault();
  var filterValue = $(this).attr('data-filter');
  $sectionWrapper.isotope({ filter: filterValue });
  $('.tab').removeClass('tab_active');
  $(this).addClass('tab_active');
  // $(this).parent().addClass('tab_active');
  // $('').hide();
  // $(this).removeClass('tab_active');
  // $().hide()
  // $(this).removeClass('active');
});



/****************  Tab js go here ********************/

// Hide the panels
// $('#Tab').on('click', function(e) {
//   e.preventDefault();
//   $(this).addClass('tab_active');
    // $(this).parent().addClass('tab_active');
//    // When the user clicks a tab link (div a)
//     // Hide all of the panels (.panel)
//     $('.panel').hide();
//     // Fade in the related panel
//     var tabClickedOn = $(this).data('panel');
//     console.log(tabClickedOn);
//     $('#' + tabClickedOn).fadeIn(350);
    

    
  
// });



/********************End isotope effect*******************/

// hamburger menu

$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.menu').toggleClass('slide-down');
  

});

$('.menu').on('click', function (e) {
  e.preventDefault();
 
  $('.menu').toggleClass('slide-down');

});

/********************Modal Window*******************/

// when the user clicks on the .trigger button
$('.trigger').on('click', function () {
  // add the .show-modal class to the .modal
  $('.modal').addClass('show-modal');
});



// when the user clicks on the .close-modal button
$('.close-modal').on('click', function () {
  // remove the .show-modal class to the .modal
  $('.modal').removeClass('show-modal');
});



/*****************************************************/

// Smooth scroll this mother!

// Do it when someone clicks a nav link
$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});

// Change color of nav on scroll jQuery
var distanceToAbout = $('#about').offset().top - 50;

console.log(distanceToAbout);

$(window).on('scroll', function () {

  var distanceScrolled = $(window).scrollTop();
  // how far distance scroll

  // If user has scrolled down further than about section
  if (distanceScrolled > distanceToAbout) {
    $('nav').addClass('scroll');
  }
  else {
    $('nav').removeClass('scroll');
  }

    // Type code related to event here! :)
    
});



// var distanceFromTopToResume = $('#resume').offset().top;

// $(window).scroll(function (){
//   console.log("window scroll", $(window).scrollTop())
//   if ($(window).scrollTop() > distanceFromTopToResume ) {
//     $("#resume").addClass('faded-in');
//       //fade in my resume
//   } else {
//     $("#resume").removeClass('faded-in');
//   }

// });



window.sr = ScrollReveal();
sr.reveal('.resume_flex', { duration: 500 }, 500);

