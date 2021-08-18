// wallShelfImages.js

import displayProductImages from "./productImagesFunction.js";
import totalResults from "./totalResults.js";

function wallShelfImages() {

    const imagesArray = [
        {
            path: './assets/pp-homesparkle-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-floating-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-woodecor-wallshelf.jpg',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-homesparkle-1-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-homesparkle-2-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-homesparkle-3-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-plus-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-mozaic-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
    ]

    displayProductImages(imagesArray);
    totalResults(imagesArray);
}

wallShelfImages();