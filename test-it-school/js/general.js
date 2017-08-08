$('.banner').slick({
	dots: true,
	arrows: false
});


$( function() {
	$( "#buttom" ).on( "click", function() {
		$( "#effect" ).toggleClass( "height-auto", 1000 );
	});
} );
$( function() {
	$( "#buttom2" ).on( "click", function() {
		$( "#effect2" ).toggleClass( "height-auto", 1000 );
	});
} );
$( function() {
	$( "#buttom3" ).on( "click", function() {
		$( "#effect3" ).toggleClass( "height-auto", 1000 );
	});
} );
$( function() {
	$( "#buttom4" ).on( "click", function() {
		$( "#effect4" ).toggleClass( "height-auto", 1000 );
	});
} );

$('.sliders').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
	{
	  breakpoint: 1020,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: true
	  }
	},
	{
	  breakpoint: 794,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 2, 
		infinite: true
	  }
	}

  ]
});
$( function() {
	$( "#burgher" ).on( "click", function() {
		$( "#header" ).toggleClass( "open", 1000 );
	});
});
$( function() {
    $( "#tab" ).tabs();
  } );













