  $('body').mouseover(function(){$('#1').fadeToggle(4000) });
        $('body').mouseover(function(){$('#2').fadeToggle(4500) });
        $('body').mouseover(function(){$('#3').fadeToggle(5000) });
        $('body').mouseover(function(){$('#4').fadeToggle(5500) });
        $('body').mouseover(function(){$('#5').fadeToggle(5600) });
        $('body').mouseover(function(){$('#6').fadeToggle(4800) });
        $('body').mouseover(function(){$('#7').fadeToggle(4100) });
        $('body').mouseover(function(){$('#8').fadeToggle(6000) });
        $('body').mouseover(function(){$('#9').fadeToggle(6900) });
        $('body').mouseover(function(){$('#10').fadeToggle(65000) });
        $('body').mouseover(function(){$('#11').fadeToggle(7000) });
        $('body').mouseover(function(){$('#12').fadeToggle(6700) });
        $('.test').mouseover(function(){$(this).css('border-radius','3px')}).mouseover(function(){$(this).css('margin-top','0em')})
        .mouseover(function(){$(this).css('background-color','white')}).mouseover(function(){$(this).css('color','black')})
        .mouseover(function(){$(this).css('border-color','black')});
        $('.test').mouseleave(function(){$(this).css('border-radius','0px')}).mouseleave(function(){$(this).css('margin-top','1em')})
        .mouseleave(function(){$(this).css('background-color','#004b98')}).mouseleave(function(){$(this).css('color','white')})
        .mouseover(function(){$(this).css('border-color','white')});
        $('#drop').css('display', 'none');
$('#cancel').css('display', 'none');
$('#menu').click(function(){$('#drop').show()})
            .click(function(){$('#cancel').show()});
$('#cancel').click(function(){$('#drop').hide()})
            .click(function(){$(this).hide()});
 $('#contenuto').click(function(){$('#drop').css('display', 'none')});
 $('#contenuto').click(function(){$('#cancel').css('display', 'none')});

$('a').mouseover(function(){$(this).css('text-decoration','underline')})
     .mouseout(function(){$(this).css('text-decoration','none')});