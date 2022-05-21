import React from 'react';
import car from '../../Images/car.webp'

const Section = () => {
    return (
        <div className='bg-info text-white p-6 mt-20 mx-12'>
            <h2 className='text-center text-6xl'>We Provides Original Vehicles Parts</h2>
            <p className='text-center text-2xl mt-4'>We Are One of The Leading Car parts Companies</p>
            <div className='flex justify-center carMargin mt-8'>
                <img src={car} alt="" />
            </div>
        </div>
    );
};

export default Section;