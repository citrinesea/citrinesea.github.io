text/javascript

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
}

const elementsToFadeInOnLoad = document.querySelectorAll(".fade-in-on-load");
if (elementsToFadeInOnLoad) {
  window.addEventListener("load", function(event) {
    elementsToFadeInOnLoad.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in");
      } else {
        element.classList.remove("fade-in");
      }
    });
  });
}