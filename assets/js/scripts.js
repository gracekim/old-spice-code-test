$(document).ready(function() {
	setTimeout(function() {
		$('.video-content-wrapper').velocity({
			height: 140
		}, {
			duration: 600,
			easing: 'easeInSine'
		});
	}, 1000);

	setTimeout(function() {
		$('.video-content-wrapper iframe').velocity({
			opacity: 1
		}, {
			duration: 600
		});
	}, 1100);

	setTimeout(function() {
		$('.ad-cover').velocity({ 
		    opacity: 0 }, { display: "none" }, {
		    duration: 2000
		});    
	}, 3000);

	setTimeout(function() {
		$('.click-sign').velocity({
			height: 200,
			translateY: -10
		}, {
			delay: 3500,
			duration: 1500,
			easing: 'easeInSine'
		});
	});

	setTimeout(function() {
		$('.moving-clouds').velocity({
			translateX: 80
		}, {
			delay: 1000,
			duration: 7000,
			easing: 'easeInSine'
		});
	});

	setTimeout(function() {
		$('.palm-trees').velocity({
			rotateY: "2deg",
			translateX: ".08rem"
		}, {
 			loop: 20		
 		});
	}, 2750);
});

$(document).ready(function(){
	$('.click-sign').mouseenter(function () {
	$(this).addClass('hover'); 
	$('.hover').velocity({
 	rotateY: "7deg",
 	rotateZ: "-7deg"
 	}, {
 		loop: 1
 	});
    });
});

