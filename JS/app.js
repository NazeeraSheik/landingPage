//adding menu while the page is responsive
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//creating navigation bar using js
function createNavItem(x) {
  let ai=document.createElement("a")
  ai.textContent = x;
  ai.addEventListener('click',function(){
    ai.href=`#${x}`
  });   
  return ai;
}
const menu = document.getElementById('myTopnav');
let n=document.getElementsByTagName('section').length
for(let i=0;i<n;i++){
  menu.appendChild(createNavItem(`section${i+1}`))
}


//changing color to active section and changing state in navigation bar
function applyColor(className,n){
  const box=document.getElementById(className);
  const nv=document.getElementById("myTopnav");
  const atag=document.getElementsByTagName("a")[n];
  document.addEventListener('scroll',function(){
    var rect1=box.getBoundingClientRect();
    var n=nv.getBoundingClientRect();
    m=rect1.height
    if(rect1.top<n.height && Math.abs(rect1.top)+n.height<=m){
     box.style.backgroundColor="#875D71";
     atag.setAttribute("class","active")
   }
    else {
     box.style.backgroundColor="#398AB9";
     atag.removeAttribute("class")
      }
  } );
}


//calling color function
for(let i=0;i<n;i++){
  applyColor(`section${i+1}`,i+2)
}




var isScrolling;
window.addEventListener('scroll', function ( event ) {

var x = document.getElementById("myTopnav");
x.style.display="block";

window.clearTimeout( isScrolling );
isScrolling = setTimeout(function() {
// Run the callback
if(window.pageYOffset !=0){

x.style.display="None";
}

},2000);
}, false);


//adding top button
// top button js

//Get the button
var mybutton = document.getElementById("Btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function buttonFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}








