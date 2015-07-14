/*


:::jQuery returns a collection

Usage
----------------
jQuery(document).ready(function() {alert("Welcome to jQuery"); });


An equivalent to the above is:
------------------------------
$( function() {alert("Welcome to jQuery"); } );


:::Notice that "jQuery(document).ready()" is replaced with "$()".
:::jQuery always default to the document.ready state when the $ symbol is used


*/




$(function() {
  
/*
  // Selection By id
  $("#first").addClass("highlight");

  // Selection By element / tag
  $('p').addClass('highlight');

  // Selection By class
  $('.chosen').addClass('ish-color');

  // Combinations separated by comma
  $('#first, .chosen').addClass('highlight');

  // Contains
  $('li:contains("Three")').addClass('highlight');

  // next, previous
  $('li:contains("Five")').prev().addClass('ish-color');
  $('li:contains("Five")').next().addClass('ish-color');
*/  


  // siblings() and parent()
  // -- siblings() affect the siblings of the element alone
  //       without the element itself.
  // -- parent() affect all elements withing the parent
  //$('li:contains("Six")').siblings().addClass('highlight');


  // p with attribute name="mySecondPara"
  //$('p[name="mySecondPara"]').fadeOut(1000).fadeIn(1000);

  // p with attribute name != "mySecondPara"
  //$("p[name!='mySecondPara']").addClass("highlight");

  // p without a name attribute
  //$("p").not("[name]").addClass("highlight");

  // even(), odd() - This effect would be useful for table rows.
  //$('li:even').addClass('highlight');

  // nth-child(i) where i starts from 1
  $("li:nth-child(1)").addClass("highlight");

});