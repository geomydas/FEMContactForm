const form = document.querySelector("[data-js='form']");
const inputFirstName = document.querySelector("[data-js='first-name']");
const inputLastName = document.querySelector("[data-js='last-name']");
const inputEmail = document.querySelector("[data-js='email']");
const inputGeneralEnquiry = document.querySelector("[data-js='general-enquiry']");
const inputSupportRequest = document.querySelector("[data-js='support-request']");
const inputMessage = document.querySelector("[data-js='message']");
const inputConsent = document.querySelector("[data-js='consent']");
const inputText = [inputFirstName, inputLastName, inputMessage];
const inputButton = [inputGeneralEnquiry, inputSupportRequest];
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
  input.setAttribute("aria-invalid", "true");
  input.removeAttribute("aria-invalid", "false");
  inputErrorMessage.classList.add("block");
  inputErrorMessage.classList.remove("hidden");
  inputErrorMessage.textContent = inputErrorMessage.getAttribute("data-content");
}

function clearError(input) {
  const inputErrorMessage = document.querySelector(`#${input.name}-error-message`);
  input.setAttribute("aria-invalid", "false");
  input.removeAttribute("aria-invalid", "true");
  inputErrorMessage.classList.add("hidden");
  inputErrorMessage.classList.remove("block");
  inputErrorMessage.textContent = "";
}

function testValidityEmail(input) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isValid = regexEmail.test(input.value);

  if (!isValid) {
    renderError(input);
  } else {
    clearError(input);
  }
}

function testValidityText(input) {
  const value = input.value;

  if (value.trim() === "") {
    renderError(input);
  } else {
    clearError(input);
  }
}

function testValidityButton(input) {
  if (!input.validity.valid) {
    renderError(input);
  } else {
    clearError(input);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  inputText.forEach((input) => {
    testValidityText(input);
  });

  testValidityEmail(inputEmail);

  inputButton.forEach((input) => {
    testValidityButton(button);
  });
});
