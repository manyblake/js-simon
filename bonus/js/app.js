const slidesWrapper = document.querySelector(`.carousel__wrapper`);
const nextArrow = document.querySelector(`.carousel__arrow--next`);
const prevArrow = document.querySelector(`.carousel__arrow--prev`);
const pagination = document.querySelector(`.carousel__pagination`);

const slides = [
  `./img/01.jpg`,
  `./img/02.jpg`,
  `./img/03.jpg`,
  `./img/04.jpg`,
  `./img/05.jpg`,
];

const slidesElements = [];
const buttonsElements = [];
let currentIndex = 0;

for (let i = 0; i < slides.length; i++) {
  const li = document.createElement("li");
  const src = slides[i];
  const img = document.createElement("img");
  const button = document.createElement("button");
  img.src = src;
  li.appendChild(img);
  li.className = `carousel__slide`;
  slidesWrapper.appendChild(li);
  slidesElements.push(li);
  pagination.appendChild(button);
  buttonsElements.push(button);

  if (i === currentIndex) {
    li.classList.add(`carousel-slide--active`);
    button.classList.add(`active`);
  }
}

function nextSlide() {
  const slideActive = slidesElements[currentIndex];
  const buttonActive = buttonsElements[currentIndex];
  slideActive.classList.remove(`carousel-slide--active`);
  buttonActive.classList.remove(`active`);
  if (currentIndex < slidesElements.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  const nextSlide = slidesElements[currentIndex];
  const nextButton = buttonsElements[currentIndex];
  nextSlide.classList.add(`carousel-slide--active`);
  nextButton.classList.add(`active`);
}

nextArrow.addEventListener("click", function () {
  nextSlide();
  clearInterval(interval);
  interval = setInterval(nextSlide, 3000);
});

prevArrow.addEventListener("click", function () {
  const slideActive = slidesElements[currentIndex];
  const buttonActive = buttonsElements[currentIndex];
  slideActive.classList.remove(`carousel-slide--active`);
  buttonActive.classList.remove(`active`);

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slidesElements.length - 1;
  }

  const nextSlide = slidesElements[currentIndex];
  const nextButton = buttonsElements[currentIndex];
  nextSlide.classList.add(`carousel-slide--active`);
  nextButton.classList.add(`active`);
});

function nextSlide() {
  const slideActive = slidesElements[currentIndex];
  const buttonActive = buttonsElements[currentIndex];
  slideActive.classList.remove(`carousel-slide--active`);
  buttonActive.classList.remove(`active`);
  if (currentIndex < slidesElements.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  const nextSlide = slidesElements[currentIndex];
  const nextButton = buttonsElements[currentIndex];
  nextSlide.classList.add(`carousel-slide--active`);
  nextButton.classList.add(`active`);
}

let interval = setInterval(nextSlide, 3000);
