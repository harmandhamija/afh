// studyTable.js

import seeMoreImages from "./seeMoreImages.js";
import displayProductImages, { moreProductImages } from "./productImagesFunction.js";
import totalResults from "./totalResults.js";

const imagesArray = [
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
    },
    {
        path: './assets/pp-crystal-study.webp',
        alt: 'Study Table'
    },
    {
        path: './assets/pp-yutaka-study.webp',
        alt: 'Study Table'
    },
    {
        path: './assets/pp-guide-hutch-study.webp',
        alt: 'Study Table'
    },
    {
        path: './assets/pp-riviera-study.webp',
        alt: 'Study Table'
    },
    {
        path: './assets/pp-colibri-study.webp',
        alt: 'Study Table'
    },
    {
        path: './assets/pp-attikos-study.webp',
        alt: 'Study Table'
    },
]

function studyImages() {
    displayProductImages(imagesArray);
}

studyImages();

const moreImagesArray = [
    {
        path: './assets/pp-myoki-study.webp',
        alt: 'Study Table'
    },
    {
        path: './assets/pp-hutch-wenge-study.webp',
        alt: 'Study Table'
    },
    {
        path: './assets/pp-tama-study.webp',
        alt: 'Study Table'
    },
    {
        path: './assets/office-study-table-1.jpeg',
        alt: 'Study Table'
    },
    {
        path: './assets/office-study-table-2.jpeg',
        alt: 'Study Table'
    },
    {
        path: './assets/office-study-table-3.jpeg',
        alt: 'Study Table'
    }
]

function moreStudyImages() {
    seeMoreImages(moreImagesArray);
    moreProductImages(moreImagesArray);
}

moreStudyImages();

const totalImagesArray = imagesArray.concat(moreImagesArray);
totalResults(totalImagesArray);