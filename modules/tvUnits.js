// tvUnits.js

export default function tvUnitImages() {

    const imagesArray = [
        {
            path: './assets/ul-zephyr-tv.jpg',
            alt: 'Wooden TV Units'
        },
        {
            path: './assets/ul-bayern-tv.jpg',
            alt: 'Wooden TV Units'
        },
        {
            path: './assets/ul-baltoro-tv.jpg',
            alt: 'Wooden TV Units'
        },
        {
            path: './assets/ul-zephyr-1-tv.jpg',
            alt: 'Wooden TV Units'
        },
        {
            path: './assets/ul-euler-tv.jpg',
            alt: 'Wooden TV Units'
        },
        {
            path: './assets/ul-taarkashi-tv.jpg',
            alt: 'Wooden TV Units'
        },
        {
            path: './assets/ul-celestin-tv.jpg',
            alt: 'Wooden TV Units'
        },
        {
            path: './assets/ul-sawyer-wall-tv.jpg',
            alt: 'Wooden TV Units'
        },
        {
            path: './assets/ul-astrid-tv.jpg',
            alt: 'Wooden TV Units'
        },
        {
            path: './assets/ul-iwaki-tv.jpg',
            alt: 'Wooden TV Units'
        }
    ]

    imagesArray.forEach((image) => {

        const tvUnitImages = document.querySelector('.tv-units-images');

        const imageDiv = document.createElement('div');

        const tvUnitImage = document.createElement('img');

        tvUnitImage.src = `${image.path}`;
        tvUnitImage.alt = `${image.alt}`;

        imageDiv.appendChild(tvUnitImage);

        tvUnitImages.appendChild(imageDiv);
    })

}

tvUnitImages();