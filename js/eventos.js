function obtenerFecha(){
  var fecha = new Date();
  var dias = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var anio = fecha.getFullYear();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  
  if (minutos < 10){
    minutos = "0" + minutos;
  }

  var fecha_mostrar = new String(dias + "/" + mes + "/" + anio + " " + hora + ":" + minutos);
  
  return fecha_mostrar;
}

function isEmpty(string) {
  return (!string || 0 === string.length);
}

//Controles galeria
var next = document.getElementById("next");
var prev = document.getElementById("prev");


next.onclick = function(){
  plusSlides(1);
}

prev.onclick = function(){
  plusSlides(-1);
}




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 
var slideIndex = 1;
showSlides(slideIndex);




var next2 = document.getElementById("next2");
var prev2 = document.getElementById("prev2");


next2.onclick = function(){
  plusSlides2(1);
}

prev2.onclick = function(){
  plusSlides2(-1);
}

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex2-1].style.display = "block";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);


function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}
  slides[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 5000); // Change image every 2 seconds
} 