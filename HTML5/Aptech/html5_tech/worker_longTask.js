var i = 0;

function timedCount()
{
  i = i + 1;
  postMessage(i); // Web Worker method
  
  setTimeout("timedCount()", 1000);
}

timedCount();