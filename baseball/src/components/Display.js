import React from 'react';
import Dashboard from './Dashboard';

const Display = () => {

    const [balls, setBalls] = React.useState(0);
    const [strikes, setStrikes] = React.useState(0);

    let ball = () => {
        if (balls < 3) {
            setBalls(balls + 1);
        } else {
            setStrikes(0);
            setBalls(0);
        }
    };

    let strike = () => {
        if (strikes < 2) {
            setStrikes(strikes + 1);
        } else {
            setStrikes(0);
            setBalls(0);
        }
    };

    let foul = () => {
        if (strikes < 2) {
            setStrikes(strikes + 1);
        } else {
            setStrikes(strikes + 0);
        }
    };

    let hit = () => {
        setStrikes(0);
        setBalls(0);
    };




    return (
        <div className='display'>
            <div className='balls'>
                <p>{balls}</p>
                <h1>Balls</h1>
            </div>
            <div className='strikes'>
                <p>{strikes}</p>
                <h1>Strikes</h1>
            </div>
            <Dashboard ball={ball} strike={strike} foul={foul} hit={hit} />
        </div> 
    );
};

export default Display;