import React from 'react';
import Dashboard from './Dashboard';
import useStrikes from '../Hooks/useStrikes';
import useBalls from '../Hooks/useBalls';

const Display = () => {

    const [balls, setBalls] = useBalls(0);
    const [strikes, setStrikes] = useStrikes(0);

    React.useEffect(()=>{
        (function () {
            setBalls(balls);
        })()

        (function () {
            setStrikes(strikes);
        })()

    });




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
            <Dashboard />
        </div>
    );
};

export default Display;