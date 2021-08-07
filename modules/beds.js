// beds.js

export default function bedsImages() {

    const imagesArray = [
        {
            path: './assets/bed-1.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/bed-3.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/bed-9.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/ul-baltoro-bed.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/ul-duetto-bed.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/ul-ohio-bed.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/ul-pico-bed.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/ul-sentosa-bed.png',
            alt: 'Double Bed'
        },
        {
            path: './assets/ul-tyra-bed.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/bed-10.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/bed-12.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/bed-11.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/bed-8.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/bed-6.jpg',
            alt: 'Double Bed'
        },
        {
            path: './assets/bed-7.jpg',
            alt: 'Double Bed'
        }
    ]

    imagesArray.forEach((image) => {

        const bedsImages = document.querySelector('.beds-images');

        const imageDiv = document.createElement('div');

        const bedImage = document.createElement('img');

        bedImage.src = `${image.path}`;
        bedImage.alt = `${image.alt}`;

        imageDiv.appendChild(bedImage);

        bedsImages.appendChild(imageDiv);
    })

}

bedsImages();