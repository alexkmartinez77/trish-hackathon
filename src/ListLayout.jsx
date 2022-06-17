import React from 'react';
//I will refactor code to make less repetitive
export default props => (
  
<div className="accordion accordion-flush row bg-transparent full-width no-border-pls" id="accordionFlushExample">
<div className='col-6 right-column-full-width' >
<div className='row '>
  <div className="accordion-item bg-transparent no-border-pls">
    <h2 className="accordion-header bg-transprent" id="flush-headingOne ">
      <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <div className='col-1 number-style' >
                     1
                  </div>
                  <div className='col-11'><p className="fs-5 grey">20 secs <stong className='exercise-text-color-size'>{props.exerciseBurpeeName}</stong><br />
        10 secs REST </p>
        </div>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse bg-transparent collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><img src={props.exerciseBurpeeGif} className='rounded gif-size' alt='Exercise demo' /></div>
    </div>
  </div>
  <div className="accordion-item bg-transparent no-border-pls">
    <h2 className="accordion-header bg-transparent" id="flush-headingTwo">
      <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <div className='col-1' >
                     <p className="number-style">2</p>
   
                  </div>
                  <div className='col-11'><p className="fs-5 grey">20 secs <stong className='exercise-text-color-size'> {props.exercise2Name}</stong><br />
        10 secs REST </p>
        </div>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse bg-transparent collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><img src={props.exercise2Gif}  className='rounded gif-size' alt='Exercise demo' /></div>
    </div>
  </div>
  <div className="accordion-item bg-transparent no-border-pls">
    <h2 className="accordion-header bg-transparent" id="flush-headingThree">
      <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <div className='col-1' >
                     <p className="number-style">3</p>
   
                  </div>
                  <div className='col-11'><p className="fs-5 grey">20 secs <stong className='exercise-text-color-size'>{props.exercise3Name}</stong><br />
        10 secs REST </p>
        </div>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><img src={props.exercise3Gif} className='rounded gif-size' alt='Exercise demo' /></div>
    </div>
  </div>

  <div className="accordion-item bg-transparent no-border-pls">
    <h2 className="accordion-header bg-transparent" id="flush-headingFour">
      <button className="accordion-button bg-transparent collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      <div className='col-1' >
                     <p className="number-style">4</p>
   
                  </div>
                  <div className='col-11'><p className="fs-5 grey">20 secs <stong className='exercise-text-color-size'>{props.exercise4Name}</stong><br />
        10 secs REST </p>
        </div>
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><img src={props.exercise4Gif} className='rounded gif-size' alt='Exercise demo' /></div>
    </div>
  </div>
  </div>
  </div>
 {/*  begining of 2nd column */}
  <div className='col-6 column-full-width'>
    <div className='row start-top full-width'>
  <div className="accordion-item bg-transparent no-border-pls">
    <h2 className="accordion-header bg-transparent" id="flush-headingFive">
      <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      <div className='col-1' >
                     <p className="number-style">5</p>
      </div>
                     <div className='col-11'><p className="fs-5 grey">20 secs <stong className='exercise-text-color-size'>{props.exerciseBurpeeName}</stong><br />
        10 secs REST </p>
        </div>
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse bg-transparent" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><img src={props.exerciseBurpeeGif} className='rounded gif-size' alt='Exercise demo' /></div>
    </div>
  </div>


  <div className="accordion-item bg-transparent no-border-pls">
    <h2 className="accordion-header" id="flush-headingSix">
      <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      <div className='col-1' >
                     <p className="number-style">6</p>
   </div>
                     <div className='col-11'><p className="fs-5 grey">20 secs <stong className='exercise-text-color-size'>{props.exercise6Name}</stong><br />
        10 secs REST </p>
        </div>
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse bg-transparent" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><img src={props.exercise6Gif} className='rounded gif-size' alt='Exercise demo' /></div>
    </div>
  </div>


  <div className="accordion-item bg-transparent no-border-pls">
    <h2 className="accordion-header" id="flush-headingSeven">
      <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
        
         <div className='col-1' >
                     <p className="number-style">7</p>
   </div>
                     <div className='col-11'><p className="fs-5 grey">20 secs <stong className='exercise-text-color-size'>{props.exercise7Name}</stong><br />
        10 secs REST </p>
        </div>
      </button>
    </h2>
    <div id="flush-collapseSeven" className="accordion-collapse collapse bg-transparent" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><img src={props.exercise7Gif} className='rounded gif-size' alt='Exercise demo' /></div>
    </div>
  </div>


  <div className="accordion-item bg-transparent no-border-pls">
    <h2 className="accordion-header" id="flush-headingEight">
      <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
      <div className='col-1' >
                     <p className="number-style">8</p>
   </div>
                     <div className='col-11'><p className="fs-5 grey">20 secs <stong className='exercise-text-color-size'>{props.exercise8Name}</stong><br />
        10 secs REST </p>
        </div>
      </button>
    </h2>
    <div id="flush-collapseEight" className="accordion-collapse collapse bg-transparent" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><img src={props.exercise8Gif} className='rounded gif-size' alt='Exercise demo' /></div>
    </div>
  </div>

</div>
</div>
</div>


);