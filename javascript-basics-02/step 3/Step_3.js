const nameElt = document.getElementById("name");
const divElt = document.createElement("div");
document.body.appendChild(divElt);

nameElt.addEventListener("change", (e) => {
  let newContent = nameElt.value;
  divElt.innerText = newContent;
});
