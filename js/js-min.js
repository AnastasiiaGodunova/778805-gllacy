var feedback=document.querySelector(".feedback-button"),popup=document.querySelector(".modal-feedback-form"),form=popup.querySelector(".feedback-form"),close=popup.querySelector(".modal-close"),feedbackName=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),comments=popup.querySelector("[name=comments]"),overlay=document.querySelector(".overlay");feedback.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),overlay.classList.add("overlay-show"),feedbackName.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("overlay-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),overlay.classList.remove("overlay-show")))}),form.addEventListener("submit",function(e){feedbackName.value&&email.value&&comments.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))});