$('document').ready(function(){
    let defaultimg   = $('ul li.active').attr('data-image');
        defaulttitle = $('ul li.active').attr('data-title');
        imagewidth = $('ul').width();
        imageheight= $('ul').height();
    $('.slider-content').html('<img src="'+ defaultimg + defaulttitle +'>');
    $('ul li').click(function() {
        let slidetitle = $(this).attr('data-title');
            slideimage = $(this).attr('data-image');
        $('ul li').removeClass('active');
        $(this).addClass('active');
        $('.slider-content').html('<img src="'+ slideimage + '"alt="' + slidetitle +'">');
    });
});