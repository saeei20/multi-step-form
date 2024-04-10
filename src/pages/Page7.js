import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBrain } from '@fortawesome/free-solid-svg-icons';

function Page7() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <hr />
            <h1 className="text-2xl font-bold">Learning paths based on your answers</h1>
            <h2 className="text-lg">Choose one to get started. You can switch anytime.</h2>
            <br></br>
            <div className="flex items-center mt-4">
                <label htmlFor="beginner" className="flex items-center border border-gray-300 rounded p-4 w-80 h-40 mx-5">
                    <input type="radio" id="beginner" name="interest" value="beginner" onChange={() => handleOptionChange('beginner')} />
                    <FontAwesomeIcon icon={faCode} className="ml-2" />
                    <span className="ml-2 font-bold">Development</span>
                    <p className="ml-2 mt-1">Build your foundation skills in development domain.</p>
                </label>
                <label htmlFor="intermediate" className="flex items-center border border-gray-300 rounded p-4 w-80 h-40 mx-5">
                    <input type="radio" id="intermediate" name="interest" value="intermediate" onChange={() => handleOptionChange('intermediate')} />
                    <FontAwesomeIcon icon={faBrain} className="ml-2" />
                    <span className="ml-2 font-bold">DSA</span>
                    <p className="ml-2 mt-1">Build your foundation skills in data structures and algorithms.</p>
                </label>
            </div>
            <br></br>
            {/* <Link to="/Page6" className={`mt-4 bg-black text-white px-4 py-2 rounded ${selectedOption ? '' : 'pointer-events-none opacity-50'}`}>
                Continue</Link> */}
        </div>
    );
}

export default Page7;
