const ageElt = document.getElementById("age");

ageElt.value = prompt("Enter your age");

document.getElementById("validate").addEventListener("click", () => {
  if (ageElt.value > 18) {
    alert("you are over 18");
  } else {
    alert("you are under 18");
  }
});
