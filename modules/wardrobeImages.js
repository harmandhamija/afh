// wardrobeImages.js

import displayProductImages from "./productImagesFunction.js";
import totalResults from "./totalResults.js";

function wardrobeImages() {

    const imagesArray = [
        {
            path: './assets/pp-linden-4door-wardrobe.webp',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/pp-sora-wardrobe.webp',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/pp-nicole-wardrobe.jpg',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/pp-grafton-wardrobe.webp',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/pp-kosmo-wardrobe.webp',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/pp-torin-wardrobe.webp',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/ul-miller-2door-wardrobe.jpg',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/ul-hilton-wardrobe.jpg',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/ul-baltoro-wardrobe.jpg',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/ul-bocado-wardrobe.jpg',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/ul-miller-3door-wardrobe.jpg',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/ul-hilton-4door-wardrobe.jpg',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/pp-eichi-wardrobe.webp',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/pp-kosmo-optima-wardrobe.webp',
            alt: 'Wooden Wardrobe'
        }
    ]

    displayProductImages(imagesArray);
    totalResults(imagesArray);
}

wardrobeImages();


