$(document).ready( function(){
  $('figure img').mouseenter( function (){
    $(this).fadeTo(200, .0);
  }).mouseleave(function(){
    $(this).fadeTo(200, 1);
  }).click( function(){
    $(this).next().toggle(700);
  });

  $('footer').click( function(){
    $(this).animate({
      top: '-=50px',
      opacity: '-=.2'
    }, 900)
  } ).dblclick ( function(){
    $(this).animate({
      top: '0',
      opacity: '1'
    }, 900)
  });
});
