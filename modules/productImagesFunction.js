// productImagesFunction.js

function displayImages(imagesArray, imagesContainerDiv) {
    imagesArray.forEach((image) => {
        const imageDiv = document.createElement('div');
        const productImage = document.createElement('img');

        productImage.src = `${image.path}`;
        productImage.alt = `${image.alt}`;

        imageDiv.appendChild(productImage);
        imagesContainerDiv.appendChild(imageDiv);
    })

    const loading = document.querySelector('.loading');
    loading.style.display = 'none';

    const footer = document.querySelector('.pages-footer');
    footer.style.display = 'block';
}

export default function displayProductImages(imagesArray) {
    const displayProductImages = document.querySelector('.display-product-images');
    displayImages(imagesArray, displayProductImages);
}

export function moreProductImages(imagesArray) {
    const moreProductImages = document.querySelector('.more-product-images');
    displayImages(imagesArray, moreProductImages);
}