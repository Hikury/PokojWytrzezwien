let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-movie');
const totalSlides = slides.length;

document.
  getElementById('next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });

document.
  getElementById('prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove('visible-slide');
      slide.classList.add('hidden-movie');
    }
  
    slides[slidePosition].classList.add('visible-slide');
  }
  

function moveToPrevSlide(){
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
      } else {
        slidePosition--;
      }
    
      updateSlidePosition();
}

console.log(slides[slidePosition-1])