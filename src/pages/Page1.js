import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUser, faChalkboardTeacher, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Page1() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <hr />
            <h1 className="text-2xl font-bold">Which describes you best?</h1>
            <h2 className="text-lg">This will help us personalize your experience.</h2>
            <div className="flex flex-col items-center mt-4">
                
                <label htmlFor="undergraduate" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="undergraduate" name="userType" value="undergraduate" onChange={() => handleOptionChange('undergraduate')} />
                    <FontAwesomeIcon icon={faUserGraduate} className="ml-2" />
                    <span className="ml-2">Undergraduate Student</span>
                </label>
                <label htmlFor="postgraduate" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="postgraduate" name="userType" value="postgraduate" onChange={() => handleOptionChange('postgraduate')} />
                    <FontAwesomeIcon icon={faUserGraduate} className="ml-2" />
                    <span className="ml-2">Postgraduate Student</span>
                </label>
                <label htmlFor="professional" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="professional" name="userType" value="professional" onChange={() => handleOptionChange('professional')} />
                    <FontAwesomeIcon icon={faUser} className="ml-2" />
                    <span className="ml-2">Professional</span>
                </label>
                <label htmlFor="teacher" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="teacher" name="userType" value="teacher" onChange={() => handleOptionChange('teacher')} />
                    <FontAwesomeIcon icon={faChalkboardTeacher} className="ml-2" />
                    <span className="ml-2">Teacher</span>
                </label>
                <label htmlFor="other" className="flex items-center border border-gray-300 rounded p-4 w-80 my-2">
                    <input type="radio" id="other" name="userType" value="other" onChange={() => handleOptionChange('other')} />
                    <FontAwesomeIcon icon={faBriefcase} className="ml-2" />
                    <span className="ml-2">Other</span>
                </label>
            </div>
            <Link to="/Page2" className={`mt-4 bg-black text-white px-4 py-2 rounded ${selectedOption ? '' : 'pointer-events-none opacity-50'}`}>Continue</Link>
        </div>
    );
}

export default Page1;
