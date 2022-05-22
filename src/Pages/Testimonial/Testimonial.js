import React from 'react';
import './Testimonial.css'

const Testimonial = ({ review }) => {
    const { description, name, address, img } = review
    return (
        <div className='mt-10'>
            <div className="card w-96 bg-base-100 shadow-md p-4">
                <div className="card-body">
                    <p><i class="fa-solid fa-quote-left"></i>{description}<i class="fa-solid fa-quote-right"></i></p>
                </div>
                <div className='flex items-center'>
                    <div className="avatar ml-8">
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <figure><img src={img} alt="" /></figure>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h1>{name}</h1>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;