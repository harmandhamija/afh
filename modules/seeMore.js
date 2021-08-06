// seeMore.js

export default function seeMore() {
    const seeMore = document.querySelector('.see-more');
    const moreDetails = document.querySelector('.more-details');
    const seeLess = document.querySelector('.see-less');

    seeMore.addEventListener('click', function () {
        moreDetails.style.display = 'inline';
        seeLess.style.display = 'inline';
        seeMore.style.display = 'none';
    })

    seeLess.addEventListener('click', function () {
        seeMore.style.display = 'inline';
        moreDetails.style.display = 'none';
        seeLess.style.display = 'none';
    })
}

seeMore();