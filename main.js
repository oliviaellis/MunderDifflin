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
var counter = 2
var delay = 250;

window.onload = function animatePaper() {
  p1.id = "p1"
  for (i = 0; i < papers.length-1; i++) {
  var paperCount = 'p'+counter;
  console.log(paperCount);
  var paperPosition = document.getElementById('p'+counter+'-start');
  console.log(paperPosition);
  paperPosition.setAttribute('id', paperCount);
  counter++;
  }

  setTimeout(function(){sheath.id = "sheath"}, 2250);}
  setTimeout (function() {
    for (i = 0; i < papers.length; i++) {
      p = papers[i];
      p.classList.remove('paper');
      p.classList.add('paper-out');
    }
  }, 4200);
  setTimeout(function(){sheath.id = "sheath-end"}, 4200);
  setTimeout(function(){boxLabel.id = "box-label-end"}, 4200);

var product1 = document.getElementById('o1');
var product2 = document.getElementById('o2');
var product3 = document.getElementById('o3');
var product4 = document.getElementById('o4');

var products = [product1, product2, product3, product4];

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
