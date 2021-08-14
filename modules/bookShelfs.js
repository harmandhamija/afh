// bookShelfs.js

import { setThreeImages } from "./productImagesFunction.js";

function bookShelfImages() {

    const imagesArray = [
        {
            path: './assets/pp-mokuzai-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        },
        {
            path: './assets/pp-hayao-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        },
        {
            path: './assets/pp-magnat-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        },
        {
            path: './assets/pp-toner-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        },
        {
            path: './assets/pp-kosmo-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        },
        {
            path: './assets/pp-duet-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        },
        {
            path: './assets/pp-simone-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        },
        {
            path: './assets/pp-cordoba-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        },
        {
            path: './assets/pp-eden-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        },
        {
            path: './assets/pp-walter-bookshelf.webp',
            alt: 'Wooden Book Shelf'
        }
    ]

    setThreeImages(imagesArray);

}

bookShelfImages();