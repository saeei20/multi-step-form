import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faBrain, faRobot, faUserTie } from '@fortawesome/free-solid-svg-icons';

function Page4() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <hr />
            <h1 className="text-2xl font-bold">What is your coding comfort level?</h1>
            <h2 className="text-lg">Choose the highest level you feel confident in - you can always adjust later.</h2>
            <br></br>
            <div className="flex items-center mt-4">
                <label htmlFor="beginner" className="flex items-center border border-gray-300 rounded p-4 w-40 h-40 mx-3">
                    <input type="radio" id="beginner" name="interest" value="beginner" onChange={() => handleOptionChange('beginner')} />
                    <FontAwesomeIcon icon={faCode} className="ml-2" />
                    <span className="ml-2">Beginner</span>
                </label>
                <label htmlFor="intermediate" className="flex items-center border border-gray-300 rounded p-4 w-50 h-40 mx-3">
                    <input type="radio" id="intermediate" name="interest" value="intermediate" onChange={() => handleOptionChange('intermediate')} />
                    <FontAwesomeIcon icon={faLaptopCode} className="ml-2" />
                    <span className="ml-2">Intermediate</span>
                </label>
                <label htmlFor="advance" className="flex items-center border border-gray-300 rounded p-4 w-40 h-40 mx-3">
                    <input type="radio" id="advance" name="interest" value="advance" onChange={() => handleOptionChange('advance')} />
                    <FontAwesomeIcon icon={faBrain} className="ml-2" />
                    <span className="ml-2">Advanced</span>
                </label>
                <label htmlFor="professional" className="flex items-center border border-gray-300 rounded p-4 w-50 h-40 mx-3">
                    <input type="radio" id="professional" name="interest" value="professional" onChange={() => handleOptionChange('professional')} />
                    <FontAwesomeIcon icon={faUserTie} className="ml-2" />
                    <span className="ml-2">Professional</span>
                </label>
            </div>
            <br></br>
            <Link to="/Page5" className={`mt-4 bg-black text-white px-4 py-2 rounded ${selectedOption ? '' : 'pointer-events-none opacity-50'}`}>Continue</Link>
        </div>
    );
}

export default Page4;
