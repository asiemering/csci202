
$(document).ready(function(){

  $(".maroonAnimation").hide();
  $(".redAnimation").hide();
  $(".orangeAnimation").hide();
  $(".yellowAnimation").hide();
  $(".greenAnimation").hide();
  $(".lightblueAnimation").hide();
  $(".blueAnimation").hide();
  $(".darkblueAnimation").hide();
  $(".purpleAnimation").hide();

  $(".mercuryButton").click(function(){

    $(".maroonAnimation").show();

    $(".maroonAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

  });

  $(".venusButton").click(function(){

    $(".blueAnimation").show();

    $(".blueAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

  });

  $(".maroonAnimation").mouseleave(function(){

    $(".maroonAnimation").animate({
      height: '10%',
      width: '15%',
      top: '30%',
      left: '40%'
    });

    $(".maroonAnimation").hide();

  });

  $(".blueAnimation").mouseleave(function(){

    $(".blueAnimation").animate({
      height: '10%',
      width: '15%',
      top: '30%',
      left: '40%'
    });

    $(".blueAnimation").hide();

  });

});






