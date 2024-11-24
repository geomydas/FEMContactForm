const form = document.querySelector("[data-js='form']");
const toast = document.querySelector("[data-js='toast']");
const inputFirstName = document.querySelector("[data-js='first-name']");
const inputLastName = document.querySelector("[data-js='last-name']");
const inputEmail = document.querySelector("[data-js='email']");
const inputGeneralEnquiry = document.querySelector("[data-js='general-enquiry']");
const inputSupportRequest = document.querySelector("[data-js='support-request']");
const inputMessage = document.querySelector("[data-js='message']");
const inputConsent = document.querySelector("[data-js='consent']");
const inputs = [
  inputFirstName,
  inputLastName,
  inputEmail,
  inputGeneralEnquiry,
  inputSupportRequest,
  inputMessage,
  inputConsent,
];

function show(input) {
  input.classList.add("block");
  input.classList.remove("hidden");
}

function hide(input) {
  input.classList.add("hidden");
  input.classList.remove("block");
}

function ariaInvalid(input) {
  input.setAttribute("aria-invalid", "true");
  input.removeAttribute("aria-invalid", "false");
}

function ariaValid(input) {
  input.setAttribute("aria-invalid", "false");
  input.removeAttribute("aria-invalid", "true");
}

function showRedBorder(input) {
  input.classList.add("border-red");
  input.classList.remove("border-grey-900");
}

function hideRedBorder(input) {
  input.classList.add("border-grey-900");
  input.classList.remove("border-red");
}

function renderError(input) {
  const inputErrorMessage = document.querySelector(
    `#${input.getAttribute("name")}-error-message`,
  );
  showRedBorder(input);
  ariaInvalid(input);
  show(inputErrorMessage);
  inputErrorMessage.textContent = inputErrorMessage.getAttribute("data-content");
}

function clearError(input) {
  const inputErrorMessage = document.querySelector(
    `#${input.getAttribute("name")}-error-message`,
  );
  hideRedBorder(input);
  ariaValid(input);
  hide(inputErrorMessage);
  inputErrorMessage.textContent = "";
}

function testValidity(input) {
  switch (input.getAttribute("data-type")) {
    case "email":
      const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValid = regexEmail.test(input.value);

      if (!isValid) {
        renderError(input);
        return false;
      } else {
        clearError(input);
        return true;
      }

    case "text":
    case "name":
      const value = input.value;

      if (value.trim() === "") {
        renderError(input);
        return false;
      } else {
        clearError(input);
        return true;
      }

    case "checkbox":
    case "radio":
      if (!input.validity.valid) {
        renderError(input);
        return false;
      } else {
        clearError(input);
        return true;
      }
  }
}

function renderSuccess(form, toast) {
  form.reset();
  show(toast);
  setTimeout(hideToast, 7000);
  // gotta make another function since using function params like () or (thing) fucks with setTimeout(). hideToast works but hideToast() doesnt

  function hideToast() {
    hide(toast);
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    testValidity(input);
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  inputs.forEach((input) => {
    testValidity(input);
  });

  if (
    testValidity(inputs[0]) &&
    testValidity(inputs[1]) &&
    testValidity(inputs[2]) &&
    testValidity(inputs[3]) &&
    testValidity(inputs[4]) &&
    testValidity(inputs[5]) &&
    testValidity(inputs[6])
  ) {
    renderSuccess(form, toast);
  }
});
