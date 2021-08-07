// studyTable.js

export default function studyImages() {

    const imagesArray = [
        // {
        //     path: './assets/ul-kuzma-study.jpg',
        //     alt: 'Study Table'
        // },
        {
            path: './assets/ul-graham-study.jpg',
            alt: 'Study Table'
        },
        {
            path: './assets/ul-bond-study.jpg',
            alt: 'Study Table'
        },
        {
            path: './assets/ul-austen-study.jpg',
            alt: 'Study Table'
        },
        {
            path: './assets/ul-anton-study.jpg',
            alt: 'Study Table'
        },
        {
            path: './assets/ul-wodehouse-study.jpg',
            alt: 'Study Table'
        },
        {
            path: './assets/ul-angelou-study.jpg',
            alt: 'Study Table'
        }
    ]

    imagesArray.forEach((image) => {

        const studyImages = document.querySelector('.study-images');

        const imageDiv = document.createElement('div');

        const studyImage = document.createElement('img');

        studyImage.src = `${image.path}`;
        studyImage.alt = `${image.alt}`;

        imageDiv.appendChild(studyImage);

        studyImages.appendChild(imageDiv);
    })

}

studyImages();