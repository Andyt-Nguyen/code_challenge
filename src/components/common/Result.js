import React from 'react';

export default () => (
  <div className="result">
    <h1 style={{marginTop: 20}}>Your Result</h1>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h4>Picture name</h4>
      <img src="https://placehold.it/200"/>
      <button style={{display:'block'}}>LIke Me :)</button>
    </div>
    
    <div className="slider_container">
      <input style={{ width: '100%'}} type="range" min="1" max="10" class="slider" id="myRange"></input>
    </div>
  </div>
)