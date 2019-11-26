import React from 'react';

export default ({ title, url }) => (
  <div className="result">
    <h1 style={{marginTop: 20}}>Your Result</h1>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h4>{title}</h4>
      <div style={{ width: 400, border: '2px solid red' }}>
        <img src={url} alt={title} style={{ width: '100%' }} />
      </div>
      <button style={{display:'block'}}>LIke Me :)</button>
    </div>
  </div>
)