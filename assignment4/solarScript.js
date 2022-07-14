
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

    $(".redAnimation").show();

    $(".redAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

  });

  $(".redAnimation").mouseleave(function(){

    $(".redAnimation").animate({
      height: '10%',
      width: '15%',
      top: '30%',
      left: '40%'
    });

    $(".redAnimation").hide();

  });



  $(".venusButton").click(function(){

    $(".maroonAnimation").show();

    $(".maroonAnimation").animate({
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



  $(".earthButton").click(function(){

    $(".orangeAnimation").show();

    $(".orangeAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

  });

  $(".orangeAnimation").mouseleave(function(){

    $(".orangeAnimation").animate({
      height: '10%',
      width: '15%',
      top: '30%',
      left: '40%'
    });

    $(".orangeAnimation").hide();

  });



  $(".marsButton").click(function(){

    $(".yellowAnimation").show();

    $(".yellowAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

  });

  $(".yellowAnimation").mouseleave(function(){

    $(".yellowAnimation").animate({
      height: '10%',
      width: '15%',
      top: '30%',
      left: '40%'
    });

    $(".yellowAnimation").hide();

  });



  $(".jupiterButton").click(function(){

    $(".greenAnimation").show();

    $(".greenAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

  });

  $(".greenAnimation").mouseleave(function(){

    $(".greenAnimation").animate({
      height: '10%',
      width: '15%',
      top: '30%',
      left: '40%'
    });

    $(".greenAnimation").hide();

  });



  $(".saturnButton").click(function(){

    $(".lightblueAnimation").show();

    $(".lightblueAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

  });

  $(".lightblueAnimation").mouseleave(function(){

    $(".lightblueAnimation").animate({
      height: '10%',
      width: '15%',
      top: '30%',
      left: '40%'
    });

    $(".lightblueAnimation").hide();

  });



  $(".uranusButton").click(function(){

    $(".blueAnimation").show();

    $(".blueAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

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



  $(".neptuneButton").click(function(){

    $(".darkblueAnimation").show();

    $(".darkblueAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

  });

  $(".darkblueAnimation").mouseleave(function(){

    $(".darkblueAnimation").animate({
      height: '10%',
      width: '15%',
      top: '30%',
      left: '40%'
    });

    $(".darkblueAnimation").hide();

  });



  $(".plutoButton").click(function(){

    $(".purpleAnimation").show();

    $(".purpleAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

  });

  $(".purpleAnimation").mouseleave(function(){

    $(".purpleAnimation").animate({
      height: '10%',
      width: '15%',
      top: '30%',
      left: '40%'
    });

    $(".purpleAnimation").hide();

  });

});












