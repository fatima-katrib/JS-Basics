const inputElt = document.getElementsByTagName("input");

document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
  // // inputElts.value.reset();
  for (i = 0; i < inputElt.length; i++) {
    inputElt[i].value = "";
  }
});
