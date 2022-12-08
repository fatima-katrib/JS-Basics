let imgElts = document.querySelectorAll("img");

function new_image(image, i) {
  image.target.src = `images/image${i + 1}_2.jpg`;
}
function reset_image(image, i) {
  image.target.src = `images/image${i + 1}.jpg`;
  console.log(image.target.src);
}

imgElts.forEach((img, nb) => {
  img.addEventListener("mouseover", (i) => {
    new_image(i, nb);
  });
});

imgElts.forEach((img, nb) => {
  img.addEventListener("mouseout", (i) => {
    reset_image(i, nb);
  });
});
