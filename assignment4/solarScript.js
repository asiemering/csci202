
$(document).ready(function(){
  $(".animation").hide();
  $("button").click(function(){
    $(".animation").fadeIn();
    $(".animation").animate({
      height: '+=150px',
      width: '+=150px'
    });

    $(".animation").animate({
      height: '-=100px',
      width: '-=100px'
    });
  });
});