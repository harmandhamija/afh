// sofaSets.js

export default function sofaImages() {

    const imagesArray = [{
            path: './assets/sofa-1.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/sofa-2.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/sofa-3.JPG',
            alt: 'Sofa Set'
            },
        {
            path: './assets/sofa-4.JPG',
            alt: 'Sofa Set'
        }
    ]

    imagesArray.forEach((image) => {

        const ssImages = document.querySelector('.ss-images');

        const imageDiv = document.createElement('div');

        const sofaImage = document.createElement('img');

        sofaImage.src = `${image.path}`;

        imageDiv.appendChild(sofaImage);

        // imageDiv.style.backgroundImage = `url(${image.path})`;

        ssImages.appendChild(imageDiv);
    })

}

sofaImages();