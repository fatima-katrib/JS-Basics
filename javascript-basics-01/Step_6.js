const firstnbElt = document.getElementById("first_number");
const secondnbElt = document.getElementById("second_number");

firstnbElt.value = prompt("Enter the first number?");
secondnbElt.value = prompt("Enter the second number?");

let division = firstnbElt.value / secondnbElt.value;

document.getElementById("validate").addEventListener("click", (e) => {
  e.preventDefault;
  alert(
    `the reaminder of ${firstnbElt.value}/${secondnbElt.value} = ${
      firstnbElt.value % secondnbElt.value
    }`
  );
});
