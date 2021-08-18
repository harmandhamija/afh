// totalResults.js

export default function totalResults(imagesArray) {
    const totalProductImages = document.querySelector('.total-product-images');
    const totalResults = document.createElement('p');

    totalResults.setAttribute('class', 'total-results');
    totalResults.textContent = `Total Results - ${imagesArray.length}`
    totalProductImages.appendChild(totalResults);
}
