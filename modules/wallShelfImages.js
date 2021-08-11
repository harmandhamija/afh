// wallShelfImages.js

export default function wallShelfImages() {

    const imagesArray = [
        {
            path: './assets/pp-homesparkle-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-floating-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-woodecor-wallshelf.jpg',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-homesparkle-1-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-homesparkle-2-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-homesparkle-3-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-plus-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
        {
            path: './assets/pp-mozaic-wallshelf.webp',
            alt: 'wooden wall shelf'
        },
    ]

    imagesArray.forEach((image) => {

        const wallShelfImages = document.querySelector('.wallshelf-images');

        const imageDiv = document.createElement('div');

        const wallShelfImage = document.createElement('img');

        wallShelfImage.src = `${image.path}`;
        wallShelfImage.alt = `${image.alt}`;

        imageDiv.appendChild(wallShelfImage);

        wallShelfImages.appendChild(imageDiv);
    })

}

wallShelfImages();