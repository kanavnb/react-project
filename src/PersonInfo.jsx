import './App.css';

import { useState } from 'react';

const PersonInfo = () => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Message: Hello!');
    };

    return (
        <div id="person-info" className="person-info">
            <h1>Name: Kanatbek Kamilov</h1>
            <p>Position: Developer</p>
            <p>Company: Spam</p>
            <p>City: Bishkek</p>
            <p>Age: 20</p>
            <p>Hobbies: Programming</p>
            <button id="change-position-button" onClick={handleClick}>Click Me</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PersonInfo;

