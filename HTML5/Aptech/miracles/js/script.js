$(function () {

    {
        var pageURL = document.URL;

        if (pageURL.match('index')) {
            $('#home').addClass('select');
        } else if (pageURL.match('video')) {
            $('#offers').addClass('select');
        } else if (pageURL.match('about')) {
            $('#about').addClass('select');
        } else if (pageURL.match('gridlocks')) {
            $('#gridlocks').addClass('select');
        } 
    }


    $('#offers-sub').hide();

    $('#offers').mouseover(function () {
        $('#offers-sub').show();
    });

    $('#offers').mouseout(function () {
        $('#offers-sub').hide();
    });


    /* Overlay */
    $('#about').click(function () {
        $('#overlay-wrapper').css({ 'display': 'block' });
        $('#container').hide();
    });

    $('#close-overlay').click(function () {
        $('#overlay-wrapper').css({ 'display': 'none' });
        $('#container').show();
    });
});