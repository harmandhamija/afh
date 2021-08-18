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
    const footer = document.querySelector('.pages-footer')
    footer.style.display = 'block';
}

export default function setOneImages(imagesArray) {
    const setOneProductImages = document.querySelector('.set1-product-images');
    displayImages(imagesArray,setOneProductImages);
}

export function setTwoImages(imagesArray) {
    const setTwoProductImages = document.querySelector('.set2-product-images');
    displayImages(imagesArray, setTwoProductImages);
}

export function setThreeImages(imagesArray) {
    const setThreeProductImages = document.querySelector('.set3-product-images');
    displayImages(imagesArray, setThreeProductImages);
}

export function setFourImages(imagesArray) {
    const setFourProductImages = document.querySelector('.set4-product-images');
    displayImages(imagesArray, setFourProductImages);
}

export function moreProductImages(imagesArray) {
    const moreProductImages = document.querySelector('.more-product-images');
    displayImages(imagesArray, moreProductImages);
}