$(function () {


    // #DEFINE: Programatically adding a new tab

    var divChildren = $('#myTabs div'); // get div in #myTabs
    var nextDiv = eval(divChildren.size() + 1);

    var ulChildren = $('#myTabs ul li'); // get li in ul in #myTabs
    var nextLi = eval(ulChildren.size() + 1);

    // include the next li
    $('#myTabs ul').append(
        "<li><a href=#tabs-" + nextLi + ">Yipee \"New Tab\"</a></li>"
    );

    // include the next div
    $('#myTabs').append(
        '<div id=tabs-' + nextDiv + '>' + '<p>Yipee! We made it here.<br>'
        + '<iframe src=\"ch13-DOM.html\" style=\"border:none; width:100%; height:180px;\">'
        + '</iframe></p></div>'
    );




    // works on IE, fails on Chrome - styling the iframe content
    $('iframe').load(function () {
        $('iframe').contents().find("head").append($("<style type='text/css'> body { color: LightGreen; } </style>"));
    });

    // #END: end of new tab



    // create the tabs
    $('#myTabs').tabs();

    // create the datepicker
    //$('#myDatepicker').datepicker();


    $('#myDatepicker').click(function () {
        $('#myDatepicker').datepicker();


        // tweeking to display week
        //$('#myDatepicker').datepicker("option", "showWeek", true);


        // tweeking to change week header from Wk(default)
        //$('#myDatepicker').datepicker("option", "weekHeader", "Weeky");

        // animation - show (default), slideDown, fadeIn, fold
        //$('#myDatepicker').datepicker("option", "showAnim", "slideDown");



        // displaying the datepicker
        $('#myDatepicker').datepicker("show");
    });



    // using the date selected

    $('#myDatepicker2').datepicker({
        onSelect: function (dateText, inst) {
            $('#dateSelected').append(" - " + dateText);
        }
    });

});