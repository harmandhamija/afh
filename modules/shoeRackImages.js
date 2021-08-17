// shoeRakcs.js

import totalResults from "./totalResults.js";

function shoeRackImages() {

    const imagesArray = [
        // {
        //     path: './assets/pp-crystal-shoerack.webp',
        //     alt: 'wooden shoe racks'
        // },
        {
            path: './assets/pp-karin-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-kosmo-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-crystal-1-shoerack.jpg',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-mimi-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-daiso-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-wesley-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-kikuko-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-fayette-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-kenta-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-alester-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-carina-shoerack.jpg',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-crystal-4door-shoerack.jpg',
            alt: 'wooden shoe racks'
        }
    ]

    const shoeRackImages = document.querySelector('.shoerack-images');

    imagesArray.forEach((image) => {

        const imageDiv = document.createElement('div');

        const shoeRackImage = document.createElement('img');

        shoeRackImage.src = `${image.path}`;
        shoeRackImage.alt = `${image.alt}`;

        imageDiv.appendChild(shoeRackImage);

        shoeRackImages.appendChild(imageDiv);
    })

    totalResults(imagesArray, shoeRackImages)
}

shoeRackImages();