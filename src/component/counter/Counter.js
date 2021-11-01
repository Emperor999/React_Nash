import { useState } from 'react';
import React from 'react';
import './Counter.css';
const Counter = ({value,setValue}) => {
    const clickToAdd =() =>{
        setValue(value+1);
    }
    const clickToSub =() =>{
        setValue(value-1);
    }
    return (
        <div className="counter">
            <button className="counter__button"
            onClick ={clickToSub}
            >-</button>
            <span className ="counter__value">{value}</span>
            <button className ="counter__button"
            onClick ={clickToAdd}
            >+</button>
        </div>
    );
};

export default Counter;