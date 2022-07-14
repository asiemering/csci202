
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      height: '+=150px',
      width: '+=150px'
    });
  });
});