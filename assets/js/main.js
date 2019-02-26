var menu = $(".menu");
var hamburger = $(".hamburger");
var line = $(".line");
var link = $(".hmenu");
var menuOpen;

function closeMenu(){
    menu.css("left", "-320px");
    line.css("background", "#fff");
    menuOpen = false;
};

function openMenu(){
    menu.css("left", "0px");
    line.css("background", "#FFF");
    menuOpen = true;
};

$(document).ready(function(){

    function toggleMenu(){
      if (menuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    hamburger.on({
      click: function(){
        toggleMenu();
      }
    })
    
    link.on({
        click: function(){
            closeMenu();
        }
    })
    
  });
  
  //$('a[href*=#]')
  
/*down*/
var pathname = window.location.pathname;
$('#scrollarrow a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
});

$('.menu-about').click(function() {
  if (pathname == '/index.html') {
    $('html, body').animate({ scrollTop: $($(this).find('a').attr('href')).offset().top}, 500, 'linear');
    closeMenu();
  } else {
    location.href = '/index.html#slide2'
  }
});

$('.menu-skills').click(function() {
  if (pathname == '/index.html') {
    $('html, body').animate({ scrollTop: $($(this).find('a').attr('href')).offset().top}, 500, 'linear');
    closeMenu();
  } else {
    location.href = '/index.html#slide4'
  }
});

$('.menu-home').click(function() {
  if (pathname == '/index.html') {
    $('html, body').animate({ scrollTop: $($(this).find('a').attr('href')).offset().top}, 500, 'linear');
    closeMenu();
  } else {
    location.href = '/index.html#slide1'
  }
});

$('.menu-portfolio').click(function() {
  if (pathname == '/index.html' || pathname != '/portfolio.html') {
    location.href = '/portfolio.html';
    closeMenu();
  } else {
    location.href = '#'
    closeMenu();
  }
});

$(document).ready(function() {
  var isMobile = window.matchMedia('only screen and (max-width: 760px)').matches;

  if (isMobile) {
    $('.card , .card-text-overlay , .cardimgcover').addClass('noanimated');
  }
});

$('.cardimgcover').click(function() {
  $('body').css('overflow','hidden');
});

$('.close').click(function() {
  $('body').css('overflow','scroll');
});

/* $('.cardimgcover').hover(function() {
  $('.card-text-overlay').css('opacity', '1');
}); */








    