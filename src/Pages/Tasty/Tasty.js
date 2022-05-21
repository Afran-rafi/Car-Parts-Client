import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import people1 from '../../Images/people-1.png'
import people2 from '../../Images/people-2.png'
import people3 from '../../Images/people-3.png'

const Tasty = () => {
    const description1 = 'This is one of the best Cars parts Company.100% original car and vehicles parts.'
    const description2 = 'I highly recommended car parts purchase in this company. because original parts'
    const description3 = 'The company Product is Amazing. This company are very expensive car and vehicles parts'

    return (
        <div>
            <h2 className='text-center text-3xl text-primary font-bold underline'>Client says</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 tasty mx-12 gap-10'>
                <Testimonial comment={description1} name="Winson Herry" address="california" img={people1}></Testimonial>
                <Testimonial comment={description2} name="Steven Smith" address="New Youk" img={people2} ></Testimonial>
                <Testimonial comment={description3} name="Tim Southi" address="North York" img={people3} ></Testimonial>
            </div >
        </div>
    );
};

export default Tasty;