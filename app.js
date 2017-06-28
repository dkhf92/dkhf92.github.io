$(document).ready(function () {
  $('span').click(function() {
    $('.overlay').toggleClass('anim');
    console.log('CLICKED');
  });
  $('.animation').click(function(){
    $('.anim').toggleClass('reverse-animation');
    console.log('CLICKED');
  });
});
