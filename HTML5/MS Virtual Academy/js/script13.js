
//
// The DOM has the structure: window > document
// which is how all the elements on a page could be accessed
//
// The window.onload() event is fired
// when all the elements of the page are completely loaded

window.onload = function() {

    // set a reference to an element through the DOM
    var clickMeButton = document.getElementById("clickMe");
    clickMeButton.onclick = runTheExample; // omit the () next to runTheExample
                                           // else it is automatically fired.
}

/*
function runTheExample() {
 alert("running the example");
}
*/

function runTheExample() {
 var myElement = document.getElementById('second');
 
 // identifying the type of element e.g. p, h1, div ...
 alert(myElement.nodeName);


 
 // getting / setting the content within the element
 // the use of innerHTML is adviced to be avoided
 if (myElement != null) {
    alert(myElement.innerHTML); 
    myElement.innerHTML = "Noticed how I changed the text here?";
 }


 // getElementsByTagName()
 // - this returns an array of same element
 var listOfParagraphs = document.getElementsByTagName('p');
 alert(listOfParagraphs.length); 

 
 alert(myElement.parentNode.nodeName);

 myElement.childeNodes[0]; // array of children that belong to myElement
 myElement.firstChild; // first child of myElement
 myElement.lastChild; // last child of myElement
 
 myElement.nextSibling;
 myElement.previousSibling;

 var anchor = document.getElementById('myAnchor');

 // mordern browser approach
 alert(anchor.href);
 anchor.href = "http://microsoft.com";

 /* older browser approach
 anchor.setAttribute('href', 'http://www.avada.com');
 anchor.getAttribute('href);
 */

}