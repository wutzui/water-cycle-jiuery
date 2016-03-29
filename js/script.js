window.sr = new scrollReveal();

$(document).ready(function(){
	
  //opening modal.
  $('.openblock').click(function(){
		$(this).fadeOut('slow');
	});

  //ice mountains.
	$('.icemount img').mouseenter(function(){
		$('.iceflow').slideToggle("slow")
	});

  // $('.mounts1').mouseenter(function(){
  //   $(this).effect('shake', {times:1}, 00);
  // });
    
  // $('.icemount').mouseenter(function(){
  //   $(this).effect('shake', {times:1}, 500);
  // });

  //draggable trees and clouds.
  $('.hightree4').draggable();
  $('.hightree3').draggable();
  $('.hightree2').draggable();
  $('.cloud1').draggable();
  $('.cloud2').draggable();
  $('.cloud3').draggable();  

  //raindrop plugin for sea part.
  jQuery('.sea').raindrops(
  {color:'#0071BC',
   canvasHeight:700,
   rippleSpeed: 0.01,
   frequency: 1,
   density: 0
  });

  //vaporation water going up.
  $(".vapora").click(function(event){
    $(this).addClass("drip-vapor");
    $("#fadec").fadeOut("slow");
    setTimeout(function(){
        $('.vapora').removeClass('drip-vapor')
        $("#fadec").fadeIn("fast");
    }, 1100);
  });

  //vaporation water going up.
  $(".vaporb").click(function(event){
    $(this).addClass("drip-vaporb");
    $("#faded").fadeOut("slow");
    setTimeout(function(){
        $('.vaporb').removeClass('drip-vaporb')
        $("#faded").fadeIn("fast");
    }, 1100);
  });


  //mouseover rivers and the arrows appears.
  $('.river1 img').mouseenter(function(){
    $('.arrow2-1').show('slow');
        $('.river1').mouseleave(function(){
        $('.arrow2-1').fadeOut('slow');
        });
  });

  $('.river1 img').mouseenter(function(){
    $('.arrow2-2').show('slow');
        $('.river1').mouseleave(function(){
        $('.arrow2-2').fadeOut('slow');
        });
  })

  $('.river1 img').mouseenter(function(){
    $('.arrow2-3').show('slow');
        $('.river1').mouseleave(function(){
        $('.arrow2-3').fadeOut('slow');
        });
  })

  $('.lake1').mouseenter(function(){
    $('.arrow3').show('slow');
        $('.lake1').mouseleave(function(){
        $('.arrow3').fadeOut('slow');
        });
  })

  $('.sea').mouseenter(function(){
    $('.arrow4').show('slow');
        $('.sea').mouseleave(function(){
        $('.arrow4').fadeOut('slow');
        });
  });

  //descriptions of 3 steps
  $(".point1").click(function(){
        $(".pre").show("slow");
        $(".point1").fadeOut("slow");

  $(".pre").click(function(){
        $(".pre").hide("slow");
        $(".point1").show("slow");
         });
  });

  $(".point2").click(function(){
        $(".pre2").show("slow");
        $(".point2").fadeOut("slow");
  $(".pre2").click(function(){
        $(".pre2").hide("slow");
        $(".point2").show("slow");
         });
  });

  $(".point3").click(function(){
        $(".pre3").show("slow");
        $(".point3").fadeOut("slow");
  $(".pre3").click(function(){
        $(".pre3").hide("slow");
        $(".point3").show("slow");
         });
  });

  $(".point4").click(function(){
        $(".pre4").show("slow");
        $(".point4").fadeOut("slow");
  $(".pre4").click(function(){
        $(".pre4").hide("slow");
        $(".point4").show("slow");
         });
  });
});