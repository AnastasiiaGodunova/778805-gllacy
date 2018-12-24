         var feedback = document.querySelector(".feedback-button");
         var popup = document.querySelector(".modal-feedback-form");
         var form = popup.querySelector(".feedback-form");
         var close = popup.querySelector(".modal-close");
         var feedbackName = popup.querySelector("[name=name]");
         var email = popup.querySelector("[name=email]");
         var comments = popup.querySelector("[name=comments]");
         var overlay = document.querySelector(".overlay");


         feedback.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            overlay.classList.add("overlay-show");
            feedbackName.focus();
         });

         close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            overlay.classList.remove("overlay-show");
         });

         window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
               evt.preventDefault();
               if (popup.classList.contains("modal-show")) {
                  popup.classList.remove("modal-show");
                  popup.classList.remove("modal-error");
                  overlay.classList.remove("overlay-show");
                  }
               }
         });

         form.addEventListener("submit", function (evt) {
            if (!feedbackName.value || !email.value || !comments.value) {
               evt.preventDefault();
               popup.classList.remove("modal-error");
               popup.offsetWidth = popup.offsetWidth;
               popup.classList.add("modal-error");
           }
         });