import React from 'react';
import { Link } from 'react-router-dom';
import img2_unsplash from '../img2_unsplash.jpg';

function Page5() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <hr />
            <div className="flex flex-row w-full">
                <div className="w-1/2 ml-80">
                    <img src={img2_unsplash} alt="Image" className="w-full h-auto object-cover" style={{ maxHeight: '400px', maxWidth: '400px' }} />
                </div>
                <div className="w-1/2 p-4">
                    <h1 className="mt-2 text-2xl font-bold">You're on your way!</h1>
                    <p className="mt-2 mr-60">"As CEO of Techvify, a top-class Software Development company, I focus on pursuing my passion for digital innovation. Understanding the customer's pain points to consolidate, manage and harvest with the most satisfactory results is what brings the project to success."</p>
                    <br></br>
                    <p> - Harry Nguyen</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <Link to="/Page6" className="mt-4 bg-black text-white px-4 py-2 rounded">Continue</Link>
        </div>
    );
}

export default Page5;
