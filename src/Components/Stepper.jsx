import React from 'react';
import '../index.css'
const stepper = ({stepsConfig = []}) => {
    if(!stepsConfig.length){
        return <></>
    }
    return (
        <div className='stepper'>
           {stepsConfig.map((step, index)=>{
            return(
                <div key={step.name} className='step'>
                <p className='step-number'>{index + 1 }</p>
                <p className="step-name">{step?.name}</p>
                
                </div>
            )

           })}
        </div>
    );
};

export default stepper;