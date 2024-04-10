import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img3_unsplash from '../img3_unsplash.jpg';

function Page6() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/Page7';
        }, 3000); // Delay in milliseconds (3 seconds)

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <hr />
            <div className="flex flex-col items-center">
                <img src={img3_unsplash} alt="Image" className="w-full h-auto object-cover max-h-80 max-w-80" />
                <div className="mt-4 p-4 text-center">
                    <h1 className="text-2xl font-bold">
                        Finding learning path recommendations for you based on <br />
                        your responses.
                    </h1>
                </div>
            </div>           
        </div>
    );
}

export default Page6;
