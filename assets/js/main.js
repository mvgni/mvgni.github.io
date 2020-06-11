var menu = $(".menu");
var hamburger = $(".hamburger");
var line = $(".line");
var link = $(".hmenu");
var menuOpen;

function closeMenu(){
    menu.css("left", "-320px");
    line.css("background", "#fff");
    $('.line, .line-dark').removeClass('active');
    menuOpen = false;
};

function openMenu(){
    menu.css("left", "0px");
    line.css("background", "#FFF");
    $('.line, .line-dark').addClass('active');
    menuOpen = true;
};



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
  $('body').css('overflow-y','scroll');
});

/* $('.cardimgcover').hover(function() {
  $('.card-text-overlay').css('opacity', '1');
}); */
/* 
$('.hamburger').click(function() {
  $('.line').toggleClass('active');
});
 */


var $cursor = $(".cursor"),
$overlay = $(".project-overlay");

function moveCircle(e) {
TweenLite.to($cursor, 0.5, {
  css: {
    left: e.pageX,
    top: e.pageY
  },
  delay: 0.03
});
}
$(".p-1").hover(function() {
  $(".cursor").css({ "background-image": "url(pnt-cover.png)" });
});

$(".p-2").hover(function() {
  $(".cursor").css({ "background-image": "url(disc-cover.png)" });
});

$(".p-3").hover(function() {
  $(".cursor").css({ "background-image": "url(gunnar-cover.png)" });
});

$(".p-4").hover(function() {
  $(".cursor").css({ "background-image": "url(vouloir-cover.png)" });
});

var flag = false;
$($overlay).mousemove(function() {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function() {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});


$('.p-1').click(function() {
  window.location.href="portfolio.html#pnt-modal"
})

$('.p-2').click(function() {
  window.location.href="portfolio.html#disc-modal"
})

$('.p-3').click(function() {
  window.location.href="portfolio.html#gunnar-modal"
})

$('.p-4').click(function() {
  window.location.href="portfolio.html#vou-modal"
})


    