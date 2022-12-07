const nameElt = document.getElementById("name");
const surnameElt = document.getElementById("surname");
const cityElt = document.getElementById("city");

nameElt.value = prompt("what is your name?");
surnameElt.value = prompt("what is your surname?");
cityElt.value = prompt("what is your city name?");

document.getElementById("validate").addEventListener("click", (e) => {
  e.preventDefault();
  alert(`Nom: ${surname.value}\n Prénom: ${name.value}\n Ville: ${city.value}`);
});
