let imgElts = document.querySelectorAll("img");

function new_image(image, i) {
  image.target.src = `images/image${i + 1}_2.jpg`;
}

imgElts.forEach((img, nb) => {
  img.addEventListener("mouseover", (i) => {
    new_image(i, nb);
  });
});
