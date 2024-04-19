"use strict";
const formBtn = document.getElementById("formButton");
const formInput = document.getElementById("formEmail");
const form = document.getElementById("myForm");

formBtn.addEventListener("click", (event) => {
  if (!formInput.validity.valid) {
    form.classList.add("js-error");
  } else {
    form.classList.remove("js-error");
  }
});

document.querySelector("#myForm").addEventListener("submit", function (e) {
  const email = document.querySelector("#formEmail").value;
  sessionStorage.setItem("email", email);
});
