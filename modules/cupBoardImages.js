// cupBoardImages.js

export default function cupBoardImages() {

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
        // {
        //     path: './assets/pp-nariko-wardrobe.jpg',
        //     alt: 'Wooden Wardrobe'
        // },
        // {
        //     path: './assets/pp-kenzou-wardrobe.webp',
        //     alt: 'Wooden Wardrobe'
        // },
        {
            path: './assets/pp-eichi-wardrobe.webp',
            alt: 'Wooden Wardrobe'
        },
        {
            path: './assets/pp-kosmo-optima-wardrobe.webp',
            alt: 'Wooden Wardrobe'
        }
    ]

    imagesArray.forEach((image) => {

        const cupBoardImages = document.querySelector('.cupboard-images');

        const imageDiv = document.createElement('div');

        const cupBoardImage = document.createElement('img');

        cupBoardImage.src = `${image.path}`;
        cupBoardImage.alt = `${image.alt}`;

        imageDiv.appendChild(cupBoardImage);

        cupBoardImages.appendChild(imageDiv);
    })

}

cupBoardImages();

