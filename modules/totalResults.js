// totalResults.js

export default function totalResults(imagesArray,productImages) {
    const totalResults = document.createElement('p');
    totalResults.setAttribute('class', 'total-results');
    totalResults.textContent = `Total Results - ${imagesArray.length}`
    productImages.appendChild(totalResults);
}

export function totalResults2(totalImagesArray) {
    const moreProductImages = document.querySelector('.more-product-images');
    const totalResults = document.createElement('p');

    totalResults.setAttribute('class', 'total-results');
    totalResults.textContent = `Total Results - ${totalImagesArray}`
    moreProductImages.appendChild(totalResults);
}
