// dressingImages.js

import { setTwoImages } from "./productImagesFunction.js";
import seeMoreImages from "./seeMoreImages.js";
import { moreProductImages } from "./productImagesFunction.js";

function dressingImages() {

    const imagesArray = [
        {
            path: './assets/ul-baltoro-dressing.jpg',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/ul-magellan-dressing.jpg',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/ul-darcy-dressing.jpg',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/ul-zephyr-dressing.jpg',
            alt: 'Wooden Dressing Unit'
        }
    ]

    imagesArray.forEach((image) => {

        const dressingImages = document.querySelector('.dressing-images');

        const imageDiv = document.createElement('div');

        const dressingImage = document.createElement('img');

        dressingImage.src = `${image.path}`;
        dressingImage.alt = `${image.alt}`;

        imageDiv.appendChild(dressingImage);

        dressingImages.appendChild(imageDiv);
    })

}

dressingImages();

function dressingPpImages() {

    const imagesArray = [
        {
            path: './assets/pp-kosmo-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-kosmo-liwa-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-zenyatta-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-kosmo-value-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-ivanka-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-kosmo-premium-dressing.webp',
            alt: 'Wooden Dressing Unit'
        }
    ]

    setTwoImages(imagesArray);
}

dressingPpImages();

function moreDressingImages() {

    const moreImagesArray = [
        {
            path: './assets/pp-crysler-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-serra-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-blazing-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-spectra-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-classic-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-kosmo-maple-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-robinson-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-ankara-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-carona-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-genesys-dressing.webp',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-reahome-dressing.jpg',
            alt: 'Wooden Dressing Unit'
        },
        {
            path: './assets/pp-blazing-dressing.webp',
            alt: 'Wooden Dressing Unit'
        }
    ]

    seeMoreImages(moreImagesArray);
    moreProductImages(moreImagesArray);
}

moreDressingImages();

