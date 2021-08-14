// storage.js

import { setThreeImages } from "./productImagesFunction.js";

function storageImages() {

    const imagesArray = [
        {
            path: './assets/pp-atlas-storage.webp',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/pp-denmark-storage.webp',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/pp-epson-storage.webp',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/pp-nicholas-storage.webp',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/pp-clermont-storage.webp',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/pp-bradford-storage.webp',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/ul-bocado-storage.jpg',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/ul-baltoro-storage.jpg',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/ul-ohio-storage.jpg',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/pp-pyrope-storage.webp',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/pp-robinson-storage.webp',
            alt: 'storage Cabinet'
            },
        {
            path: './assets/pp-lisa-storage.jpg',
            alt: 'storage Cabinet'
        }
    ]

    setThreeImages(imagesArray);
}

storageImages();