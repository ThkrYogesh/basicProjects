const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let activeIndex = 0;
let autoSlideInterval;
const slideDuration = 2000;

function removeCurrentActives() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    dots[index].classList.remove("active");
  });
}

function setActiveSlide(index) {
  removeCurrentActives();
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  activeIndex = (activeIndex + 1) % slides.length;
  setActiveSlide(activeIndex);
}

function prevSlide() {
  activeIndex = (activeIndex - 1 + slides.length) % slides.length;
  setActiveSlide(activeIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, slideDuration);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    stopAutoSlide();
    setActiveSlide(index);
    activeIndex = index;
    startAutoSlide();
  });
});

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    stopAutoSlide();
    setActiveSlide(index);
    activeIndex = index;
    startAutoSlide();
  });
});

prevButton.addEventListener("click", () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

nextButton.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

setActiveSlide(activeIndex);
startAutoSlide();
