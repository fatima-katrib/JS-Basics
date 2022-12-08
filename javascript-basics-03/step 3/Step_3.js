const colorElt = document.querySelectorAll(".color");
const textElt = document.getElementById("text");

colorElt.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("green")) {
      textElt.style.color = "green";
    } else if (e.classList.contains("red")) {
      textElt.style.color = "red";
    } else {
      textElt.style.color = "blue";
    }
  });
});
