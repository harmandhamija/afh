// reviews.js

export default function displayReviews() {
    
    const reviewsArray = [{
        name: 'Gurpreet Kaur',
        city: 'New Delhi',
        review: `"This place workmanship and on time delivery is remarkable. Mr Ajit, the owner provided me with vivid description of my furniture...like there was no question of errors. My friend had recommended this place and I thank her for getting me introduced to them. Looking forward on getting more and more work done from these people. "AJIT FURNITURE" Thanks for making my house look so beautiful."`
    },
        {
            name: 'Yashvir Singh',
            city: 'Gurugram',
            review: `"Recently visited this showroom for some WFH furniture & was impressed with the overall safety & precautions they took while dealing with the all the customers. Many different products were readily available however i wanted to customize my item which was very well explained and delivered within 3 days as promised. Overall experience was very good."`
        },

        {
            name: 'Arushi Kathuria',
            city: 'New Delhi',
            review: `"Mr Ajit is someone who has solution to all your requirements. Extremely well versed with his products and guides you to your satisfaction. For us he is a GO TO person for all our as well as our friends and family furniture related requirements. Wish him luck!"`
        },

        {
            name: 'Rupam Majumdar',
            city: 'New Delhi',
            review: `"We wanted to buy/make a sofa set (3+2+2 seater) for last one year but were not able to decide as what we've seen earlier didn't match our taste or budget. Then someone referred Ajit Furniture to us. Ajit ji though a busy man as customers pour in all the time but still gave us enough attention. Showed us many designs from his tab and catalogue and finally we liked one design..."`
        },

        {
            name: 'Murugan Chandrabalan',
            city: 'New Delhi',
            review: `"Great service, great quality would recommend without hesitation. Thank you M/s Ajit Furniture, we will use your products again in the Future."`
        },

        {
            name: 'Rajesh Sakhuja',
            city: 'New Delhi',
            review: `"It's our family furniture shop, like a family doctor. I have been buying furniture from Ajit Furniture House for the last 23 years. The first 5 seater sofa set is still fine which I had purchased 23 years ago. I have tried a lot of places but there is no match of price and quality. They have lot of experience about furniture which helped me in purchasing the right and good quality furniture for my new home."`
        }
]

    reviewsArray.forEach((review) => {

        const reviewsContent = document.querySelector('.reviews-content');

        const reviewsText = document.createElement('div');
        reviewsText.setAttribute('class', 'reviews-text')
        
        const customerReview = document.createElement('p');
        customerReview.textContent = review.review;
        customerReview.setAttribute('class', 'customer-review')
        reviewsText.appendChild(customerReview);

        const customerName = document.createElement('h3');
        customerName.textContent = review.name;
        reviewsText.appendChild(customerName);

        const customerCity = document.createElement('p');
        customerCity.textContent = review.city;
        reviewsText.appendChild(customerCity);

        reviewsContent.appendChild(reviewsText);

    })
}

displayReviews();