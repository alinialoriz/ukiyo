var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    $('.scroll-top img').fadeIn()
  } else {
    document.getElementById("navbar").style.top = "-50px";
    $('.scroll-top img').fadeOut();
  }
  prevScrollpos = currentScrollPos;
}
$(window).scroll(function(){
    $('#description').fadeIn('slow');

    if ($(window).scrollTop()==0){
    $('#description').hide();
    }
})
$('.menu-icon').click(function(){
    $('#navbar ul').toggle('slow');
})
$('.collection').click(function(){
    $('#navbar ul').slideUp('slow');
})
$('.bamboo').click(function(){
    $('#navbar ul').slideUp('slow');
})

$('.newsletter button').click(function(){
    $('.newsletter input').val("");
})

