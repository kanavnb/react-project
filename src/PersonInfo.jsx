import './App.css';

const PersonInfo = () => {
    return (
        <div id="person-info" className="person-info">
            <h1>Name: Kanatbek Kamilov</h1>
            <p>Position: Developer</p>
            <p>Company: Epam</p>
            <p>City: Bishkek</p>
            <p>Age: 20</p>
            <p>Hobbies: Programming</p>
            <button id="change-position-button">Click Me</button>
        </div>
    );
};

export default PersonInfo;
