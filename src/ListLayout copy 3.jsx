import React from 'react';

export default props => (

  <div className='accordion-item bg-transparent'>
    <h2 className='accordion-header bg-transparent' id={'flush-heading' + props.counter}>
      <button className='accordion-button collapsed bg-transparent' type='button' data-bs-toggle='collapse' data-bs-target={'#flush-collapse' +props.counter} aria-expanded='false' aria-controls={'flush-collapse' +props.counter}>
      <div className='col-1 number-style' >
                     {props.counter}
                  </div>
                  <div className='col-11'><p className='time-text-color-size'>20 secs <code>{props.exerciseName}</code><br />
        10 secs REST </p>
        </div>
      </button>
    </h2>
    <div id={'flush-collapse' +props.counter} className='accordion-collapse collapse' aria-labelledby={'flush-heading' +props.counter} data-bs-parent='#accordionFlushExample'>
      <div className='accordion-body'> <img src={props.gifUrl} alt='Exercise demo' /></div>
    </div>
  </div>
  
);