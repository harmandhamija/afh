// sofaImages.js

export default function sofaImages() {

    const imagesArray = [
        {
            path: './assets/gl-sofa.jpg',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-bombay-tufted-sofa.jpg',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-coorg-sofa.jpg',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-munich-sofa.jpg',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-norway-sofa.jpg',
            alt: 'Sofa Set'
            },
        // {
        //     path: './assets/gl-regimen-chesterfield-sofa.JPG',
        //     alt: 'Sofa Set'
        // },
        {
            path: './assets/gl-regimen-chesterfield-sofa-3.jpg',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-norway-sectional-sofa.jpg',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-munich-sectional-sofa.jpg',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-california-sectional-sofa.jpg',
            alt: 'Sofa Set'
            },
        {
            path: './assets/sofa-1.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/sofa-ethnic.jpg',
            alt: 'Sofa Set'
            },
        {
            path: './assets/sofa-2.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/sofa-scandavian.jpeg',
            alt: 'Sofa Set'
            }
    ]

    imagesArray.forEach((image) => {

        const ssImages = document.querySelector('.ss-images');

        const imageDiv = document.createElement('div');

        const sofaImage = document.createElement('img');

        sofaImage.src = `${image.path}`;
        sofaImage.alt = `${image.alt}`;

        imageDiv.appendChild(sofaImage);
        ssImages.appendChild(imageDiv);

    })

}

sofaImages();