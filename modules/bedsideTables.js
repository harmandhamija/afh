// bedsideTables.js

import { moreProductImages, setThreeImages } from "./productImagesFunction.js";
import seeMoreImages from "./seeMoreImages.js";
import { totalResults2 } from "./totalResults.js";

const imagesArray = [
    {
        path: './assets/pp-bolt-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-segur-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-dimora-color-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-rapid-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-glaze-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-orbit-bedside.jpg',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-jelks-bedside.jpg',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-pristina-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-miu-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-crescent-bedside.jpg',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-bleary-bedside.jpg',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-czar-bedside.webp',
        alt: 'Wooden Bedside Table'
    }
]

function bedsideTablesImages() {

    setThreeImages(imagesArray);
}

bedsideTablesImages();

const moreImagesArray = [
    // {
    //     path: './assets/pp-dado-bedside.jpg',
    //     alt: 'Wooden Bedside Table'
    // },
    {
        path: './assets/pp-texas-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-bolton-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-carona-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-chitose-bedside.jpg',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-flora-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-eric-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-garren-bedside.jpg',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-alex-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-aaron-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-helios-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-kosmo-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-olivia-bedside.jpg',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-vida-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/pp-caily-bedside.webp',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/ul-baltoro-bedside.jpg',
        alt: 'Wooden Bedside Table'
    },
    {
        path: './assets/ul-martino-bedside.jpg',
        alt: 'Wooden Bedside Table'
    }
]

function moreBedTableImages() {

    seeMoreImages(moreImagesArray);
    moreProductImages(moreImagesArray);
}

moreBedTableImages();

let totalImages = imagesArray.length + moreImagesArray.length;
totalResults2(totalImages);


