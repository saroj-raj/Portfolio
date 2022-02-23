<script type="text/javascript" src="js/jquery-3.6.0.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('a').click(function(){
			//alert("i am a click");
			var selected = $(this);
			$('a').removeClass('active');
			$(selected).addClass('active');


		  	$('i').hide();														/*Social*/
		});

		var $a = $('.a'),
		$b = $('.b'),
		$c = $('.c'),
		$d = $('.d'),
		$home = $('.home'),
		$aboutme = $('.aboutme'),
		$projects = $('.projects'),
		$contact = $('.contact');

		$a.click(function(){
			$home.fadeIn();
			$aboutme.fadeOut();
			$projects.fadeOut();
			$contact.fadeOut();
		});
		$b.click(function(){
			$aboutme.fadeIn();
			$home.fadeOut();
			$projects.fadeOut();
			$contact.fadeOut();
		});
		$c.click(function(){
			$projects.fadeIn();
			$home.fadeOut();
			$aboutme.fadeOut();
			$contact.fadeOut();
		});
		$d.click(function(){
			$contact.fadeIn();
			$home.fadeOut();
			$projects.fadeOut();
			$aboutme.fadeOut();
		});



	});


	/*social media links*/

	
		$(window).load(function() {
		  $('i').hide();

		  var twitterPos = $('#twitter').position();
		  var githubPos = $('#github').position();
		  var stackPos = $('#stack').position();
		  var linkedinPos = $('#linkedin').position();
		  var codePos = $('#code').position();
		  var plusPos = $('#plus').position();
		  var mailPos = $('#mail').position();
		  var imgPos = $('.me').position();
		  
		  $('i').css({
		    position: 'absolute',
		    zIndex: '1',
		    top: imgPos.top + 100,
		    left: '47%'
		  });
		  
		  setTimeout(function() {
		    $('#twitter').animate({
		      top: twitterPos.top + 10,
		      left: twitterPos.left - 10
		    }, 500);
		  }, 250);
		  
		  setTimeout(function() {
		    $('#twitter').animate({
		      top: twitterPos.top,
		      left: twitterPos.left
		    }, 250);
		    
		    $('#github').animate({
		      top: githubPos.top + 10,
		      left: githubPos.left - 6
		    }, 500);
		  }, 500);
		  
		  setTimeout(function() {
		    $('#github').animate({
		      top: githubPos.top,
		      left: githubPos.left
		    }, 250);
		    
		    $('#stack').animate({
		      top: stackPos.top + 10,
		      left: stackPos.left - 3
		    }, 500);
		  }, 750);
		  
		  setTimeout(function() {
		    $('#stack').animate({
		      top: stackPos.top,
		      left: stackPos.left
		    }, 250);
		    
		    $('#linkedin').animate({
		      top: linkedinPos.top + 10,
		      left: linkedinPos.left
		    }, 500);
		  }, 1000);
		  
		  setTimeout(function() {
		    $('#linkedin').animate({
		      top: linkedinPos.top,
		      left: linkedinPos.left
		    }, 250);
		    
		    $('#code').animate({
		      top: codePos.top + 10,
		      left: codePos.left + 3
		    }, 500);
		  }, 1250);
		  
		  setTimeout(function() {
		    $('#code').animate({
		      top: codePos.top,
		      left: codePos.left
		    }, 250);
		    
		    $('#plus').animate({
		      top: plusPos.top + 10,
		      left: plusPos.left + 6
		    }, 500);
		  }, 1500);
		  
		  setTimeout(function() {
		    $('#plus').animate({
		      top: plusPos.top,
		      left: plusPos.left
		    }, 250);
		    
		    $('#mail').animate({
		      top: mailPos.top + 10,
		      left: mailPos.left + 10
		    }, 500);
		  }, 1750);
		  
		  setTimeout(function() {
		    $('#mail').animate({
		      top: mailPos.top,
		      left: mailPos.left
		    }, 250);
		  }, 2000);
		  
		})
</script>
