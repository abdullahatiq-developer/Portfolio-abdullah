const skills = [
  { selector: ".html-css", progress: 95, color: "black" },
  { selector: ".javascript", progress:75 , color: "#6f34fe" },
  { selector: ".bootstrap", progress: 85, color: "saddlebrown" },
  { selector: ".csharp", progress: 93, color: "aqua" },
  { selector: ".sql", progress: 95, color: "darkmagenta" },
  { selector: ".typescript", progress: 85, color: "darkolivegreen" },
  { selector: ".net", progress: 90, color: "orangered" },
  { selector: ".angularjs", progress: 75, color: "brown" },
 {selector: ".winform", progress: 85, color: "aquamarine" }
];

skills.forEach(skill => {
  let progressElement = document.querySelector(skill.selector);
  let valueElement = document.querySelector(`${skill.selector}-progress`);
  let startValue = 0;
  let speed = 30;

  let progressInterval = setInterval(() => {
    startValue++;
    valueElement.textContent = `${startValue}%`;
    progressElement.style.background = `conic-gradient(${skill.color} ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue === skill.progress) {
      clearInterval(progressInterval);
    }
  }, speed);
});
// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});