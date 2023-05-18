const myTimeout = setTimeout(myStopFunction, 2000);
function myStopFunction() {
$x = document.getElementById("probtemplates");
$x.href= "https://waqardrigh.com/";
$x.innerHTML = "Waqardrigh ( Webdeveloper )";
}
function toggle_darkmode() {var element = document.body;element.classList.toggle('dark-mode');
var elements = document.getElementsByClassName("index-post");
for (var i in elements) {
  if (elements.hasOwnProperty(i)) {
  elements[i].classList.toggle('dark-mode');
  }
}
}
if (document.addEventListener) {
  document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, false);
} else {
  document.attachEvent('oncontextmenu', function () {
    window.event.returnValue = false;
  });
}