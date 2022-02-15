var slidePosition = 1;
CarouselSlideShow(slidePosition);

function moveSlide(n) {
  CarouselSlideShow(slidePosition += n);
}

function currentSlide(n) {
  CarouselSlideShow(slidePosition = n);
}

function CarouselSlideShow(n) {
  var i;
  var slides = document.querySelectorAll(".container");
  var circles = document.querySelectorAll(".dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}

  slides.forEach(slide => {
    slide.style.display = "none";
  })

  circles.forEach(circle => {
    circle.className = circle.className.replace(" enable", "");
  });

  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 