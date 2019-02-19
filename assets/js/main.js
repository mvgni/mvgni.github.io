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

$('#scrollarrow a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
});

$('.menu-about').click(function() {
    $('html, body').animate({ scrollTop: $($(this).find('a').attr('href')).offset().top}, 500, 'linear');
    closeMenu();
});

$('.menu-skills').click(function() {
    $('html, body').animate({ scrollTop: $($(this).find('a').attr('href')).offset().top}, 500, 'linear');
    closeMenu();
});


    