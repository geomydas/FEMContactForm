const form = document.querySelector("[data-js='form']");
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

function renderError(input) {
  const inputErrorMessage = document.querySelector(`#${input.name}-error-message`);
  input.classList.add("border-red")
  input.classList.remove('border-grey-900')
  input.setAttribute("aria-invalid", "true");
  input.removeAttribute("aria-invalid", "false");
  inputErrorMessage.classList.add("block");
  inputErrorMessage.classList.remove("hidden");
  inputErrorMessage.textContent = inputErrorMessage.getAttribute("data-content");
}

function clearError(input) {
  const inputErrorMessage = document.querySelector(`#${input.name}-error-message`);
  input.classList.add('border-grey-900')
  input.classList.remove("border-red")
  input.setAttribute("aria-invalid", "false");
  input.removeAttribute("aria-invalid", "true");
  inputErrorMessage.classList.add("hidden");
  inputErrorMessage.classList.remove("block");
  inputErrorMessage.textContent = "";
}

function testValidity(input) {
  switch (input.getAttribute("type")) {
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

function renderSuccess(form, alert) {
  form.reset();
  alert.classList.add("block");
  alert.classList.remove("hidden");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  inputs.forEach((input) => {
    testValidity(input);
  });

  if (form.checkValidity() && testValidity(inputEmail)) {
    renderSuccess(form);
  }
});
