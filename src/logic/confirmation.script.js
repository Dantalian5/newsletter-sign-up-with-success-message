window.onload = function () {
  const email = sessionStorage.getItem("email");
  if (email) {
    document.querySelector("#email-confirmation").textContent = email;
  }
};
