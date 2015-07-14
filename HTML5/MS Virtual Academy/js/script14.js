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

  $("#title").text("Yay, I can now get at the H1 immediately!");

  $("#first").html("<h2>Great quotes</h2>");


  // append and prepend work INSIDE the given selection
  // Read more on jQuery Manipulation
  $("#second").prepend("<h2>Creative minds</h2>");
  
  $("#second").append("<h3>... food for thought ...</h3>");



  // before, after, insertBefore, insertAfter work OUTSIDE the given selection
  // Read more on jQuery Manipulation



  // Changing the href attribute of myAnchor. This method is used to set attribute
  $("#myAnchor").attr("href", "http://google.com");
  


  // Applying CSS to an element
  $("#title").addClass("strokeLight");

  $("#title").css({ "width": "40px", "background-color": "yellow" });
  
});