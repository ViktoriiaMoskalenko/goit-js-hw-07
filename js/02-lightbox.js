import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// gallery.addEventListener("click", onClickImg);

const createImg = galleryItems
  .map(
    (element) =>
      `<li class = "gallery__item">
      <a href ="${element.original}" class ="gallery__link">
      <img class="gallery__image" src="${element.preview}" alt="${element.description}" data-source = "${element.original}">
      </a>
      </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", createImg);

let galleryImg = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
