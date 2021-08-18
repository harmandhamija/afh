// coffeeTables.js

import setOneImages from "./productImagesFunction.js";
import totalResults from "./totalResults.js";

function coffeeTableImages() {

    const imagesArray = [
        {
            path: './assets/ul-alita-coffee.jpg',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/ul-epsilon-coffee.jpg',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/ul-kivaha-coffee.jpg',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/ul-alita-coffee-1.jpg',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/ul-zephyr-coffee.jpg',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/ul-kivaha-2-coffee.jpg',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/pp-kiosk-coffee.webp',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/pp-daist-coffee.webp',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/pp-max-coffee-2.webp',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/pp-rubix-coffee-1.webp',
            alt: 'Wooden Coffee Table'
            },
        {
            path: './assets/pp-eco-coffee.webp',
            alt: 'Wooden Coffee Table'
            }
    ]

    setOneImages(imagesArray);
    totalResults(imagesArray);
}

coffeeTableImages();