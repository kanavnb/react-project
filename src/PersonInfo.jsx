import './App.css';

import { useState } from 'react';

const PersonInfo = () => {
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Click Me');

    const handleClick = () => {
        if (!message) {
            setMessage('Message: Hello!');
            setButtonText('Promote Position');
        }
    };

    return (
        <div id="person-info" className="person-info">
            <h1>Name: Kanatbek Kamilov</h1>
            <p>Position: Developer</p>
            <p>Company: Spam</p>
            <p>City: Bishkek</p>
            <p>Age: 20</p>
            <p>Hobbies: Programming</p>
            <button id="change-position-button" onClick={handleClick}>{buttonText}</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PersonInfo;

