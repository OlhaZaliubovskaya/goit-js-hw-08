// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  'afterbegin',
  galleryItems
    .map(
      galleryItem =>
        `<a class="gallery__item" href="${galleryItem.original}">
        <img class="gallery__image"
        src="${galleryItem.preview}" 
        alt= "${galleryItem.description}"></a>`
    )
    .join('')
);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});