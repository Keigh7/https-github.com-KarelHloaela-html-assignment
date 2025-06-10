 // === AVAILABILITY POPUP HANDLERS ===
function openAvailabilityPopup() {
  const popup = document.getElementById("availabilityPopup");
  if (popup) popup.classList.add("open-popup");
}

function closeAvailabilityPopup() {
  const popup = document.getElementById("availabilityPopup");
  if (popup) popup.classList.remove("open-popup");
}

// === FORM ERROR POPUP HANDLERS ===
function openFormErrorPopup(message) {
  const popup = document.getElementById("formErrorPopup");
  const popupMessage = document.getElementById("popup-message");
  if (popup && popupMessage) {
    popupMessage.innerText = message;
    popup.classList.add("open-popup");
  }
}

function closeFormErrorPopup() {
  const popup = document.getElementById("formErrorPopup");
  if (popup) popup.classList.remove("open-popup");
}

// === FORM VALIDATION ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      let errorMessages = [];

      if (name === "") {
        errorMessages.push("Name is required.");
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
      if (!emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
      }

      if (message.length < 10) {
        errorMessages.push("Message must be at least 10 characters long.");
      }

      if (errorMessages.length > 0) {
        e.preventDefault();
        openFormErrorPopup(errorMessages.join("\n"));
      }
    });
  }
});
