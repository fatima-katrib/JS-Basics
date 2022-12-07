const name_prompt =prompt("what is your name?"), surname_prompt =prompt("what is your surname?"), city_prompt = prompt("what is your city name?");

let name = document.getElementById("name");
name.value= name_prompt;

let surname = document.getElementById("surname");
surname.value = surname_prompt;

let city = document.getElementById("city");
city.value=city_prompt;

document.getElementById("validate").addEventListener("click", alert(`Nom: ${surname.value}\n Prénom: ${name.value}\n Ville: ${city.value}`)); 