
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the topnav
var topnav = document.getElementById("myTopnav");

// Get the offset position of the navbar
var sticky = topnav.offsetTop;

// Add the sticky class to the topnav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    topnav.classList.add("sticky");
  } else {
    topnav.classList.remove("sticky");
  }
}
