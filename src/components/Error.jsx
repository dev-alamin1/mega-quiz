import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=''>
            <div className='d-flex justify-content-center align-items-center border' style={{height:"100vh"}}>
                  <div className='d-flex flex-column'>
                    <h2 className='text-danger'>Oppps ! Something Went Wrong </h2>
                    <Link className='bg-dark fw-bold w-50 text-center rounded py-1 text-decoration-none text-white' to={'/'}>Back To Homapage</Link>
                  </div>
            </div>
        </div>
    );
};

export default Error;