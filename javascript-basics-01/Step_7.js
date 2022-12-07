const birth_yearElt = document.getElementById("year");
const shoe_sizeElt = document.getElementById("shoe_size");

birth_yearElt.value = prompt("Enter your birth year");
shoe_sizeElt.value = prompt("Enter your shoe size");

const operations = () => {
  let result = (birth_yearElt.value * 2 + 5) * 50 - shoe_sizeElt.value + 1766;
  alert(`the result is ${result}`);
};

document.getElementById("validate").addEventListener("click", operations);
