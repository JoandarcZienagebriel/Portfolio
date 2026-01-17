
$('a').mouseover(function(){$(this).css('text-decoration', 'underline')})
.mouseout(function(){$(this).css('text-decoration', 'none')})
$('#nav_small').css('display', 'none')
$('#menu').click(function(){$('#nav_small').toggle()});
$('#contenuto').click(function(){$('#nav_small').css('display', 'none')});

$('.services').css('display', 'none');


$('#service').mouseover(function(){$('.services').show('slow', 'linear')})
$('#service_detail').mouseover(function(){$('.services').show('slow', 'linear')})
$('.works').css('display', 'none');

$('#work').mouseover(function(){$('.works').show('slow', 'linear')});
$('#get_in_touch').mouseover(function(){$(this).css('background-color', 'rgb(88, 187, 30)')}); 
$('#get_in_touch').mouseout(function(){$(this).css('background-color', 'green')});  
$('#viola').click(function(){$('body').css('background-color','#c3a7e2')})
$('#black').click(function(){$('body').css('background-color','black')})
$('#submit').mouseover(function(){$(this).css('background-color', 'green')});
$('#submit').mouseout(function(){$(this).css('background-color', 'black')}); 
