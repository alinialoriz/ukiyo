var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    $('.scroll-top img').fadeIn();
    if ($(window).width()>=1000){
        $('#navbar li').fadeIn();
    }
  } else {
    document.getElementById("navbar").style.top = "-50px";
    $('.scroll-top img').fadeOut();
    if ($(window).width()>=1000){
        $('#navbar li').fadeOut();
    }
  }
  prevScrollpos = currentScrollPos;
}
if ($(window).width()<1000){
$('.menu-icon').click(function(){
    $('#navbar ul').toggle('slow');
})
$('.collection').click(function(){
    $('#navbar ul').slideUp('slow');
})
$('.bamboo').click(function(){
    $('#navbar ul').slideUp('slow');
})
}
$('.newsletter button').click(function(){
    $('.newsletter input').val("");
})

