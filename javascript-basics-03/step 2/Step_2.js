const linksElt = document.querySelectorAll("a");
const textElt = document.getElementById("texte");

linksElt.forEach((links) => {
  links.addEventListener("click", () => {
    if (links.innerText == "Hide") {
      textElt.style.display = "none";
      // console.log(links);
    } else {
      textElt.style.display = "block";
    }
  });
});
