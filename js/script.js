let feedback = document.querySelector('.feedback-button');
let popup = document.querySelector('.modal-feedback-form');
let form = popup.querySelector('.feedback-form');
let close = popup.querySelector('.modal-close');
let feedbackName = popup.querySelector('[name=name]');
let email = popup.querySelector('[name=email]');
let comments = popup.querySelector('[name=comments]');
let overlay = document.querySelector('.overlay');

feedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  overlay.classList.add('overlay-show');
  feedbackName.focus();
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
  overlay.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
      overlay.classList.remove('overlay-show');
    }
  }
});

form.addEventListener('submit', function (evt) {
  if (!feedbackName.value || !email.value || !comments.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  }
});

let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('up-button-shown');
  } else {
    upButton.classList.remove('up-button-shown');
  }
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};
