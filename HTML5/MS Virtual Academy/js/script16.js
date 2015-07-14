$(function() {

  $('#success').hide(); // hide the element
  $('#startover').addClass('hoverOut'); // applying a CSS class

  var mscore = 0;

  $('#bobhead').click(function() {

    //alert('Head clicked!');
    mscore++;
    $('#score').text(mscore);
    
    // $('#success').show(); // will display and remain
    $('#success').show('slow').fadeOut(2000);
    
  });


  // .hover takes 2 parameters for hover-in, hover-out

  $('#startover').hover(
    function() {
      mscore = 0;
      $('#score').text(mscore);
      $('#startover').addClass('hoverIn').removeClass('hoverOut');

    }, function() {
      $('#startover').addClass('hoverOut').removeClass('hoverIn');
    }
  );


  // Change the image src when #switchImage is clicked
  $('#switchImage').click(function(){
    if( $('#bobhead').attr('src').match("me2.jpg") ) {
      $('#bobhead').attr('src', '../images/me.jpg');
    }
    else {
      $('#bobhead').attr('src', '../images/me2.jpg');
    }
  });



/* Look into this as an alternative to the above.
  $('#bobhead').toggle(
    function() {
      $('#bobhead').attr('src', '../images/me2.jpg');
    },
    function() {
      $('#bobhead').attr('src','../images/me.jpg');
    }
  );
*/

});