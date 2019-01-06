$(document).ready(function(){
	var IntroDrop, ExperienceDrop, ProjectsDrop, CertificationsDrop, HonorsDrop, NewsDrop, HomeDrop, ConnectDrop;
	IntroDrop = new Drop({
	    target: document.querySelector('.Intro-ico'),
	    content: 'Intro',
	    position: 'top center',
	    openOn: 'hover'
	  });
	ExperienceDrop = new Drop({
	    target: document.querySelector('.Experience-ico'),
	    content: 'Experience',
	    position: 'top center',
	    openOn: 'hover'
	  });
	ProjectsDrop = new Drop({
	    target: document.querySelector('.Projects-ico'),
	    content: 'Projects',
	    position: 'top center',
	    openOn: 'hover'
	  });
	CertificationsDrop = new Drop({
	    target: document.querySelector('.Certifications-ico'),
	    content: 'Certifications',
	    position: 'top center',
	    openOn: 'hover'
	  });
	HonorsDrop = new Drop({
		    target: document.querySelector('.Honors-ico'),
		    content: 'Honors',
		    position: 'top center',
		    openOn: 'hover'
		  });
	NewsDrop = new Drop({
	    target: document.querySelector('.News-ico'),
	    content: 'News',
	    position: 'top center',
	    openOn: 'hover'
	  });
	HomeDrop = new Drop({
		target: document.querySelector('.dummyActionButton'),
		content: 'Home',
		position: 'top center',
		openOn: 'hover'
	});
	ConnectDrop = new Drop({
		target: document.querySelector('.dummyActionButtonConnect'),
		content: '',
		position: 'top center',
		openOn: 'hover'
	});
});

var $item = $('.carousel-item');
var $wHeight = $(window).height();

$item.height($wHeight);
$item.addClass('full-screen');

var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));

$('.carousel-indicators li').each(function(){
  var $slideValue = $(this).attr('data-slide-to');
  if($currentSlide == $slideValue) {
    $(this).addClass('active');
    $item.eq($slideValue).addClass('active');
  } else {
    $(this).removeClass('active');
    $item.eq($slideValue).removeClass('active');
  }
});

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 1000,
  pause: "false"
});
