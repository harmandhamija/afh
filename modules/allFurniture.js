// allFurniture.js

export default function shoeRackImages() {

    const imagesArray = [
        // {
        //     path: './assets/pp-crystal-shoerack.webp',
        //     alt: 'wooden shoe racks'
        // },
        {
            path: './assets/pp-karin-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-kosmo-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-crystal-1-shoerack.jpg',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-mimi-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-daiso-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-wesley-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-kikuko-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-fayette-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-kenta-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-alester-shoerack.webp',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-carina-shoerack.jpg',
            alt: 'wooden shoe racks'
        },
        {
            path: './assets/pp-crystal-4door-shoerack.jpg',
            alt: 'wooden shoe racks'
        }
    ]

    imagesArray.forEach((image) => {

        const shoeRackImages = document.querySelector('.shoerack-images');

        const imageDiv = document.createElement('div');

        const shoerackImage = document.createElement('img');

        shoerackImage.src = `${image.path}`;
        shoerackImage.alt = `${image.alt}`;

        imageDiv.appendChild(shoerackImage);

        shoeRackImages.appendChild(imageDiv);
    })

}

shoeRackImages();


export function wallShelfImages() {

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
