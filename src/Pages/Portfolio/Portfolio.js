import React from 'react';
import afran from '../../Images/Afran_Rafi.jpg'

const Portfolio = () => {
    return (
        <div>
            <div className='flex justify-center mt-6'>
                <img src={afran} alt="" className='rounded-full' />
            </div>
            <div className='text-center'>
                <h2 className='text-3xl text-center text-secondary font-bold'>Afran_Rafi</h2>
                <h2>Email: webafranfahim@gmail.com</h2>
                <h2>Education: HSC Candidate</h2>
                <h2>Skills:
                    <span className='font-bold'> HTML , CSS , JS , REACT , NODEJS</span>
                </h2>
                <h2>Frameworks:
                    <span className='font-bold'>Bootstrap 5, React-Bootstrap ,React-Tailwind, Express Js.</span>
                </h2>
                <div className='flex flex-col'>
                    <h2>My Projects (11 , 10 , 9 assignment) :</h2>
                    <a className='text-primary' href="https://assignment-11-5b872.web.app/">Project 1</a>
                    <a className='text-primary' href="https://assignment-10-b0017.web.app/"> Project 2</a>
                    <a className='text-primary' href="https://bike-zone-assignment-09.netlify.app/"> Project 3</a>
                </div>
            </div >
        </div >
    );
};

export default Portfolio;