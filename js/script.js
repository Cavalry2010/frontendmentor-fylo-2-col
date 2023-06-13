"use strict";

class Fylo {
  form = Array.from(document.querySelectorAll(".email-form"));

  constructor() {
    this.noValidate();
  }

  submitForm(form) {
    const input = form.querySelector("input");
    if (input.value === "" || !this.validateEmail(input.value)) {
      this.showError(form, "Please check your email");
    } else {
      this.showSuccess(form, "Thank you!");
      input.value = "";
    }
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  showError(form, message) {
    const formMessage = form.querySelector(".form-message");
    formMessage.textContent = message;
    form.classList.add("invalid-form");
  }

  showSuccess(form, message) {
    const delay = form.classList.contains("invalid-form") ? 200 : 0;
    form.classList.remove("invalid-form");
    setTimeout(
      function () {
        const formMessage = form.querySelector(".form-message");
        formMessage.textContent = message;
        form.classList.add("success-form");
      }.bind(this),
      delay
    );
  }

  noValidate() {
    this.form.forEach((form) => form.setAttribute("novalidate", "novalidate"));
  }
}

const app = new Fylo();
