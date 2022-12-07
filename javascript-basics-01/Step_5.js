let nb_1 = document.getElementById("first_number");
let nb_2 = document.getElementById("second_number");

nb_1.value = prompt("Enter the first number?");
nb_2.value = prompt("Enter the second number?");

document.getElementById("validate").addEventListener("click", (e) => {
  e.preventDefault;
  alert(`result of ${nb_1.value}*${nb_2.value} = ${nb_1.value * nb_2.value}`);
});
