import React from 'react';
import { Link } from 'react-router-dom';
import img1_unsplash from '../img1_unsplash.jpg';

function Page3() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <hr />
            <div className="flex flex-col items-center w-full">
                <img src={img1_unsplash} alt="Image" className="w-full h-auto object-cover lg:max-w-md xl:max-w-lg" style={{ maxHeight: '400px' }} />
                <div className="w-full p-4">
                    <h1 className="mt-4 text-2xl font-bold text-center">Build Essential Coding Skills</h1>
                    <p className="mt-2 text-center">The Coding courses we offer are designed to help prepare you for a career in software development, web programming, system analysis, software <br></br> testing and application design, providing foundational and advanced coding skills across multiple programming languages.</p>
                </div>
            </div>
            <Link to="/Page4" className="mt-4 bg-black text-white px-4 py-2 rounded">Continue</Link>
        </div>
    );
}

export default Page3;
