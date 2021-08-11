// seeMore.js

export default function seeMore() {
    const seeMore = document.getElementsByClassName('see-more');
    const moreDetails = document.getElementsByClassName('more-details');
    const seeLess = document.getElementsByClassName('see-less');

    seeMore[0].addEventListener('click', function () {
        moreDetails[0].style.display = 'inline';
        seeLess[0].style.display = 'inline';
        this.style.display = 'none';
    })

    seeLess[0].addEventListener('click', function () {
        seeMore[0].style.display = 'inline';
        moreDetails[0].style.display = 'none';
        this.style.display = 'none';
    })

    seeMore[1].addEventListener('click', function () {
        moreDetails[1].style.display = 'inline';
        seeLess[1].style.display = 'inline';
        this.style.display = 'none';
    })

    seeLess[1].addEventListener('click', function () {
        seeMore[1].style.display = 'inline';
        moreDetails[1].style.display = 'none';
        this.style.display = 'none';
    })
}

seeMore();