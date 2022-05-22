import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1'>
            {
                reviews.map(review => <Testimonial
                    key={review._id}
                    review={review}>
                </Testimonial>)
            }
        </div>
    );
};

export default ReviewPage;