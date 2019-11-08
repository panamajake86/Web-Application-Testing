import React from 'react';
import useStrikes from '../Hooks/useStrikes';
import useBalls from '../Hooks/useBalls';

const Dashboard = () => {

    const [balls, setBalls] = useBalls(0);
    const [strikes, setStrikes] = useStrikes(0);

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
        <div className='buttons'>
            {/* <div className='balls'>
                <p>{balls}</p>
                <h1>Balls</h1>
            </div>
            <div className='strikes'>
                <p>{strikes}</p>
                <h1>Strikes</h1>
            </div> */}
            <button onClick={ball}>Ball</button>
            <button onClick={strike}>Strike</button>
            <button onClick={foul}>Foul</button>
            <button onClick={hit}>Hit</button>
        </div>
    );
};

export default Dashboard;