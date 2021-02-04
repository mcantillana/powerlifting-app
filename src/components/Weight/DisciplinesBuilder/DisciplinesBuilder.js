import React from 'react';
import DisciplineControl from './DisciplineControl/DisciplineControl';
import classes from './DisciplinesBuilder.module.css';

const disciplines = [
    { label: 'Squat', type: 'squat'},
    { label: 'Deadlift', type: 'deadlift'},
    { label: 'Bench Press', type: 'bench press'}
];

const disciplinesBuilder = (props) => {
    return (
        <div className={classes.DisciplinesBuilder}>
            <DisciplineControl/>
            <button>REGISTRAR PESO</button>
        </div>
    );
};

export default disciplinesBuilder;