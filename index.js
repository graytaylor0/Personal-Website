$('.navbar a').on('click', function(){
    $('a').removeClass('selected');
    setTimeout(100);
    $(this).addClass('selected');
});