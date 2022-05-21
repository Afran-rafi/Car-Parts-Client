import React from 'react';

const Parts = ({ part }) => {
    const { name, image, description, minQuantity, avaiQuantity, price } = part
    return (
        <div className='mt-10'>
            <div className="card w-96 bg-base-100 shadow-md">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl text-indigo-400">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>Price: <span className='text-indigo-500'>${price}</span></p>
                    <p className='font-bold'>Minimum quantity: <span className='text-indigo-500'>{minQuantity}</span></p>
                    <p className='font-bold'>Available Quantity: <span className='text-indigo-500'>{avaiQuantity}</span></p>
                    <div className="card-actions">
                        <button className="btn-sm btn-primary rounded text-xl">Buy Now<i className="fa-solid fa-cart-shopping ml-2"></i></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Parts;