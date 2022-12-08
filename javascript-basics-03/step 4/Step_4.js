const passwordElt = document.getElementById("password");
const confirmationElt = document.getElementById("confirmation");
const buttonElt = document.querySelector("button");

buttonElt.addEventListener("click", () => {
  if (passwordElt.value != confirmationElt.value) {
    passwordElt.style.borderBlockColor = "red";
    confirmationElt.style.borderBlockColor = "red";
  }
});
