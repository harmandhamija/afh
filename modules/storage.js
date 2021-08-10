// storage.js

export default function storageImages() {

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

    imagesArray.forEach((image) => {

        const storageImages = document.querySelector('.storage-images');

        const imageDiv = document.createElement('div');

        const storageImage = document.createElement('img');

        storageImage.src = `${image.path}`;
        storageImage.alt = `${image.alt}`;

        imageDiv.appendChild(storageImage);

        storageImages.appendChild(imageDiv);
    })

}

storageImages();