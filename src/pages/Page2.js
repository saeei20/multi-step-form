import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faBrain, faRobot, faPalette } from '@fortawesome/free-solid-svg-icons';

function Page2() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <hr />
            <h1 className="text-2xl font-bold">Which are you most interested in?</h1>
            <h2 className="text-lg">Choose one option to help us customize your experience.</h2>
            <div className="flex flex-col items-center mt-4">
                <label htmlFor="web-development" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="web-development" name="interest" value="web-development" onChange={() => handleOptionChange('web-development')} />
                    <FontAwesomeIcon icon={faCode} className="ml-2" />
                    <span className="ml-2">Web Development</span>
                </label>
                <label htmlFor="app-development" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="app-development" name="interest" value="app-development" onChange={() => handleOptionChange('app-development')} />
                    <FontAwesomeIcon icon={faMobileAlt} className="ml-2" />
                    <span className="ml-2">App Development</span>
                </label>
                <label htmlFor="ai" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="ai" name="interest" value="ai" onChange={() => handleOptionChange('ai')} />
                    <FontAwesomeIcon icon={faBrain} className="ml-2" />
                    <span className="ml-2">Artificial Intelligence</span>
                </label>
                <label htmlFor="ml" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="ml" name="interest" value="ml" onChange={() => handleOptionChange('ml')} />
                    <FontAwesomeIcon icon={faRobot} className="ml-2" />
                    <span className="ml-2">Machine Learning</span>
                </label>
                <label htmlFor="ui-ux" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="ui-ux" name="interest" value="ui-ux" onChange={() => handleOptionChange('ui-ux')} />
                    <FontAwesomeIcon icon={faPalette} className="ml-2" />
                    <span className="ml-2">UI UX Designing</span>
                </label>
            </div>
            <Link to="/Page3" className={`mt-4 bg-black text-white px-4 py-2 rounded ${selectedOption ? '' : 'pointer-events-none opacity-50'}`}>Continue</Link>
        </div>
    );
}

export default Page2;
