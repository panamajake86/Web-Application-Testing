import React from 'react';
import useStrikes from '../Hooks/useStrikes';
import useBalls from '../Hooks/useBalls';

const Dashboard = (props) => {

    return (
        <div className='buttons'>
            <button onClick={props.ball}>Ball</button>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.hit}>Hit</button>
        </div>
    );
};

export default Dashboard;