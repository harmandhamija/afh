// productImagesFunction.js

export default function setOneImages(imagesArray) {

    imagesArray.forEach((image) => {

        const setOneProductImages = document.querySelector('.set1-product-images');

        const imageDiv = document.createElement('div');

        const setOneProductImage = document.createElement('img');

        setOneProductImage.src = `${image.path}`;
        setOneProductImage.alt = `${image.alt}`;

        imageDiv.appendChild(setOneProductImage);

        setOneProductImages.appendChild(imageDiv);
    })
}

export function setTwoImages(imagesArray) {

    imagesArray.forEach((image) => {

        const setTwoProductImages = document.querySelector('.set2-product-images');

        const imageDiv = document.createElement('div');

        const setTwoProductImage = document.createElement('img');

        setTwoProductImage.src = `${image.path}`;
        setTwoProductImage.alt = `${image.alt}`;

        imageDiv.appendChild(setTwoProductImage);

        setTwoProductImages.appendChild(imageDiv);
    })
}

export function moreProductImages(imagesArray) {

    const moreProductImages = document.querySelector('.more-product-images');

    imagesArray.forEach((image) => {

        const imageDiv = document.createElement('div');

        const moreProductImage = document.createElement('img');

        moreProductImage.src = `${image.path}`;
        moreProductImage.alt = `${image.alt}`;

        imageDiv.appendChild(moreProductImage);

        moreProductImages.appendChild(imageDiv);
    })
}

export function setThreeImages(imagesArray) {

    imagesArray.forEach((image) => {

        const setThreeProductImages = document.querySelector('.set3-product-images');

        const imageDiv = document.createElement('div');

        const setThreeProductImage = document.createElement('img');

        setThreeProductImage.src = `${image.path}`;
        setThreeProductImage.alt = `${image.alt}`;

        imageDiv.appendChild(setThreeProductImage);

        setThreeProductImages.appendChild(imageDiv);
    })
}