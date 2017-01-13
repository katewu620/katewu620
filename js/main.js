
/****************  Tab js go here ********************/

// Hide the panels
$('div a').on('click', function (e) {
  e.preventDefault();
  $('div li').removeClass('tab_active');
    $(this).parent().addClass('tab_active');
   // When the user clicks a tab link (div a)
    // Hide all of the panels (.panel)
    $('.panel').hide();
    // Fade in the related panel
    var tabClickedOn = $(this).data('panel');
    console.log(tabClickedOn);
    $('#' + tabClickedOn).fadeIn(350);
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


