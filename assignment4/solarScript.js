
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


  $(".venusButton").click(function(){

    $(".maroonAnimation").show();

    $(".maroonAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

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


  $(".marsButton").click(function(){

    $(".yellowAnimation").show();

    $(".yellowAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

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


  $(".saturnButton").click(function(){

    $(".lightblueAnimation").show();

    $(".lightblueAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

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


  $(".neptuneButton").click(function(){

    $(".darkblueAnimation").show();

    $(".darkblueAnimation").animate({
      height: '80%',
      width: '100%',
      top: '0',
      left: '0'
    });

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

  $("body").mouseleave(function(){

    $("div").animate({
      height: '10%',
      width: '15%',
    });

    $("div").hide();

  });

});












