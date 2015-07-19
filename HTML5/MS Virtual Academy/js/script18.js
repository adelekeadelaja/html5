// Global codes are always executed first before the jQuery ready function

$(function() {

  //var version = "1.3"; // will not affect window.version; is declared locally within this funcion
  //alert(window.version);
  //alert(APTECH.location.name + "\n" + APTECH.location.phone);




  // Unobtrusive JS Examples
  // the idea is to have the contents of your page rendered whether
  // JS is turned on or off.

  // document.write("This will not be executed if JS is turned off in the browser");


  $('#message').hide();

  $('#main').append("<img id='clickMe' src='plus-8.png' class='belly-button' alt='click me to see paragraph' >");
  
  $('#clickMe').click( function() {
     if( $(this).attr('src').match('plus-8') ) {
        $(this).attr('src', 'minus-8.png');
     } else {
        $(this).attr('src', 'plus-8.png');
     }
     
     $('#message').toggle('fast');
  });
  
  


});




  // Global variables declared
  //var version = "1.3"; // this will overwrite window.version


  // A better approach is to wrap your variables in an object
  // to avoid colliding with other variables used in libraries
  // imported into your project.
/*
var APTECH = {
       version: "2.5",
       fullName: "Aptech Education Center"
};

alert(APTECH.version); // notice this is executed before function() above


APTECH.location = {
       name: "Hyderabad",
       phone: "+91 889 7891 234"
};


*/
