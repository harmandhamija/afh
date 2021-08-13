// dining.js

export default function diningImages() {

    const imagesArray = [
        {
            path: './assets/pp-acropolis-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-stigen-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-stanfield-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-siramika-dining.jpg',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-crown-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-tuscan-1-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-stigen-teak-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-hormbean-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-hajime-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-magdalena-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-envy-dining.webp',
            alt: 'Wooden Dining Set'
        },
        {
            path: './assets/pp-bento-dining.webp',
            alt: 'Wooden Dining Set'
        }
        // {
        //     path: './assets/pp-norris-dining.webp',
        //     alt: 'Wooden Dining Set'
        // }
    ]

    imagesArray.forEach((image) => {

        const diningImages = document.querySelector('.dining-images');

        const imageDiv = document.createElement('div');

        const diningImage = document.createElement('img');

        diningImage.src = `${image.path}`;
        diningImage.alt = `${image.alt}`;

        imageDiv.appendChild(diningImage);

        diningImages.appendChild(imageDiv);
    })

}

diningImages();