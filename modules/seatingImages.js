// seating.js

import { setFourImages } from "./productImagesFunction.js";
import totalResults from "./totalResults.js";

function seatingImages() {

    const imagesArray = [
        {
            path: './assets/gl-bali-chair.jpg',
            alt: 'Seating Chaise'
            },
        {
            path: './assets/gl-milan-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/gl-paris-chair-orange.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/gl-paris-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/gl-berlin-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/gl-milan-dual-chair.jpg',
            alt: 'Seating Chaise'
            },
        {
            path: './assets/ul-carven-chair-red.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-genoa-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-brando.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-morgen-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-grace-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-carven-chair.jpg',
            alt: 'Seating Chair'
            },
        // {
        //     path: './assets/ul-charming-wing.jpg',
        //     alt: 'Seating Chair'
        //     },
        // {
        //     path: './assets/gl-berlin-cinnamon-chair.jpg',
        //     alt: 'Seating Chair'
        //     },
        // {
        //     path: './assets/gl-milan-straight-chair.jpg',
        //     alt: 'Seating Chaise'
        //     },
        {
            path: './assets/gl-gulmarg-chaise-chair.jpg',
            alt: 'Seating Chaise'
            },
        {
            path: './assets/gl-edinburgh-chaise-chair.jpg',
            alt: 'Seating Chaise'
            },
        {
            path: './assets/gl-amer-chaise-chair.jpg',
            alt: 'Seating Chaise'
            },
        {
            path: './assets/ul-elite-lounger-green.jpg',
            alt: 'Seating Chaise'
            },
    ]

    setFourImages(imagesArray);
    totalResults(imagesArray);
}

seatingImages();