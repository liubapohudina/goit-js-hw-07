import { galleryItems } from './gallery-items.js';
// Change code below this line
const listImage = document.querySelector(".gallery")
const itemImage = galleryItems.map((item) => `  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>
`)
    .join("");
 listImage.insertAdjacentHTML("afterbegin", itemImage)
//console.log(itemImage)
console.log(galleryItems);
