// seeMoreImages.js

export default function seeMoreImages(moreImagesArray) {

    const seeMoreButton = document.querySelector('.see-more-button');
    const moreProductImages = document.querySelector('.more-product-images');

    seeMoreButton.style.display = 'inline-block';

    const productArrayLength = document.createElement('p');
    productArrayLength.textContent = `(${moreImagesArray.length})`;

    seeMoreButton.appendChild(productArrayLength);

    seeMoreButton.addEventListener('click', function () {
        moreProductImages.style.display = 'flex';
        seeMoreButton.style.display = 'none';
    })
}