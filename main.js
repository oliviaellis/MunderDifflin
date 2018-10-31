var p1 = document.getElementById('p1-start');
var p2 = document.getElementById('p2-start');
var p3 = document.getElementById('p3-start');
var p4 = document.getElementById('p4-start');
var p5 = document.getElementById('p5-start');
var p6 = document.getElementById('p6-start');
var p7 = document.getElementById('p7-start');
var p8 = document.getElementById('p8-start');
var sheath = document.getElementById('sheath-start');
var boxLabel = document.getElementById('box-label');

var papers = [p1, p2, p3, p4,  p5, p6, p7, p8];

window.onload = function animatePaper() {
  p1.id = "p1"
  setTimeout(function(){p2.id = "p2"}, 250);
  setTimeout(function(){p3.id = "p3"}, 500);
  setTimeout(function(){p4.id = "p4"}, 750);
  setTimeout(function(){p5.id = "p5"}, 1000);
  setTimeout(function(){p6.id = "p6"}, 1250);
  setTimeout(function(){p7.id = "p7"}, 1500);
  setTimeout(function(){p8.id = "p8"}, 1750);
  setTimeout(function(){sheath.id = "sheath"}, 2250);
  setTimeout (function() {
    for (i = 0; i < papers.length; i++) {
      p = papers[i];
      p.classList.remove('paper');
      p.classList.add('paper-out');
    }
  }, 4200);
  setTimeout(function(){sheath.id = "sheath-end"}, 4200);
  setTimeout(function(){boxLabel.id = "box-label-end"}, 4200);
}

var product1 = document.getElementById('o1');
var product2 = document.getElementById('o2');
var product3 = document.getElementById('o3');
var product4 = document.getElementById('o4');

var products = [product1, product2, product3, product4];

function opaque() {
  product1.style.opacity = "0.8";
}

function revert() {
  product1.style.opacity = "0.5";
}

product1.addEventListener('mouseover', opaque);
product1.addEventListener('mouseout', revert);

function opaque2() {
  product2.style.opacity = "0.8";
}

function revert2() {
  product2.style.opacity = "0.5";
}

product2.addEventListener('mouseover', opaque2);
product2.addEventListener('mouseout', revert2);

function opaque3() {
  product3.style.opacity = "0.8";
}

function revert3() {
  product3.style.opacity = "0.5";
}

product3.addEventListener('mouseover', opaque3);
product3.addEventListener('mouseout', revert3);

function opaque4() {
  product4.style.opacity = "0.8";
}

function revert4() {
  product4.style.opacity = "0.5";
}

product4.addEventListener('mouseover', opaque4);
product4.addEventListener('mouseout', revert4);

//  This part works but defining the functions tripped me up
// for (i = 0; i < products.length; i++) {
//   products[i].addEventListener('mouseover', opaque);
//   products[i].addEventListener('mouseout', revert);
// }


function earthSpin() {
  earth.id = "earth-spin";
}

var earth = document.getElementById('earth');
earth.addEventListener('mouseover', earthSpin)
