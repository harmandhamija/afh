// seating.js

export default function seatingImages() {

    const imagesArray = [
        {
            path: './assets/ul-carven-chair-red.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-grace-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-morgen-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-genoa-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-carven-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-brando.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/ul-charming-wing.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/gl-berlin-chair.jpg',
            alt: 'Seating Chair'
            },
        {
            path: './assets/gl-paris-chair.jpg',
            alt: 'Seating Chair'
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

    imagesArray.forEach((image) => {

        const seatingImages = document.querySelector('.seating-images');

        const imageDiv = document.createElement('div');

        const seatingImage = document.createElement('img');

        seatingImage.src = `${image.path}`;
        seatingImage.alt = `${image.alt}`;

        imageDiv.appendChild(seatingImage);

        seatingImages.appendChild(imageDiv);
    })

}

seatingImages();