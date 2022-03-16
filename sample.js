var openside = document.getElementById("openside");

var x = document.getElementById("sidebar");
x.style.left = "-100%";
openside.addEventListener("click", function() {
  if (x.style.left == "-100%") {
    x.style.left = "0%";
  } else {
    x.style.left = "-100%";
  }
});

// window.onwheel = function() {
//   //var s = parseInt(event.deltaY);
//   var s = event.wheelDelta;
//   //var cur = parseInt(getComputedStyle(demo).fontSize);
//   if (s > 0) {
//     var n = s + 10;
//   } else {
//     var n = s - 10;
//   }
//   //demo.innerHTML = cur;
//   //demo.style.fontSize = newSize + "px";
//   demo.style.top = n;
// };

window.onscroll = function() {
  var pos = document.getElementById("navigation");
  var nav = document.getElementById("navbar");
  var logo = document.getElementById("logo");
  var bread = document.getElementById("bread");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //alert("1");
    pos.style.top = "0";
    nav.style.width = "100%";
    nav.style.height = "100px";
    nav.style.borderRadius = "0px";
    logo.style.width = "70px";
    logo.style.height = "70px";
    bread.style.visibility = "visible";
    bread.style.width = "100%";
  } else {
    //alert("2");
    pos.style.top = "5%";
    nav.style.width = "80%";
    nav.style.height = "148px";
    nav.style.borderRadius = "10px";
    logo.style.width = "90px";
    logo.style.height = "90px";
    bread.style.width = "0%";
    bread.style.visibility = "hidden";
  }
};

var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
