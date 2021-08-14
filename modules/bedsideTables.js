// bedsideTables.js

export default function bedsideTablesImages() {

    const imagesArray = [
        {
            path: './assets/pp-bolt-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-segur-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-dimora-color-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-rapid-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-glaze-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-orbit-bedside.jpg',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-jelks-bedside.jpg',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-pristina-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-miu-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-crescent-bedside.jpg',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-bleary-bedside.jpg',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-czar-bedside.webp',
            alt: 'Wooden Bedside Table'
        }
    ]

    imagesArray.forEach((image) => {

        const bedsideTablesImages = document.querySelector('.bedside-tables-images');

        const imageDiv = document.createElement('div');

        const bedsideTablesImage = document.createElement('img');

        bedsideTablesImage.src = `${image.path}`;
        bedsideTablesImage.alt = `${image.alt}`;

        imageDiv.appendChild(bedsideTablesImage);

        bedsideTablesImages.appendChild(imageDiv);
    })

}

bedsideTablesImages();


export function moreBedTableImages() {

    const moreImagesArray = [
        {
            path: './assets/pp-dado-bedside.jpg',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-texas-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-bolton-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-carona-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-chitose-bedside.jpg',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-flora-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-eric-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-garren-bedside.jpg',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-alex-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-aaron-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-helios-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-kosmo-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-olivia-bedside.jpg',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-vida-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/pp-caily-bedside.webp',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/ul-baltoro-bedside.jpg',
            alt: 'Wooden Bedside Table'
        },
        {
            path: './assets/ul-martino-bedside.jpg',
            alt: 'Wooden Bedside Table'
        }
    ]

    const seeMoreButton = document.querySelector('.see-more-button');
    const moreBedTableImages = document.querySelector('.more-bedtables-images');

    const bedsideArrayLength = document.createElement('p');
    bedsideArrayLength.textContent = `(${moreImagesArray.length})`;

    seeMoreButton.appendChild(bedsideArrayLength);


    seeMoreButton.addEventListener('click', function() {
        moreBedTableImages.style.display = 'flex';
        seeMoreButton.style.display = 'none';
    })

    moreImagesArray.forEach((image) => {

        const moreBedTableImages = document.querySelector('.more-bedtables-images');

        const imageDiv = document.createElement('div');

        const moreBedTableImage = document.createElement('img');

        moreBedTableImage.src = `${image.path}`;
        moreBedTableImage.alt = `${image.alt}`;

        imageDiv.appendChild(moreBedTableImage);

        moreBedTableImages.appendChild(imageDiv);
    })
}

moreBedTableImages();

