// sofaImages.js

export default function sofaImages() {

    const imagesArray = [
        {
            path: './assets/gl-sofa.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-bombay-tufted-sofa.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-coorg-sofa.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-munich-sofa.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/gl-norway-sofa.JPG',
            alt: 'Sofa Set'
            },
        // {
        //     path: './assets/gl-regimen-chesterfield-sofa.JPG',
        //     alt: 'Sofa Set'
        // },
        {
            path: './assets/gl-regimen-chesterfield-sofa-3.JPG',
            alt: 'Sofa Set'
        },
        {
            path: './assets/sofa-1.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/sofa-ethnic.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/sofa-2.JPG',
            alt: 'Sofa Set'
            },
    ]

    imagesArray.forEach((image) => {

        const ssImages = document.querySelector('.ss-images');

        const imageDiv = document.createElement('div');

        const sofaImage = document.createElement('img');

        sofaImage.src = `${image.path}`;
        sofaImage.alt = `${image.alt}`;

        imageDiv.appendChild(sofaImage);

        // imageDiv.style.backgroundImage = `url(${image.path})`;

        ssImages.appendChild(imageDiv);
    })

}

sofaImages();