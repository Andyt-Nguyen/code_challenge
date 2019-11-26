import React from 'react';
import { FaThumbsUp } from "react-icons/fa";

export default ({ title, url, onSliderChange, sliderVal, onLike }) => (
  <div className="result">
    <h1 style={{ marginTop: 20 }}>Your Result</h1>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h4 style={{textTransform: 'capitalize'}}>{title}</h4>
      <div style={{ width: 400, textAlign: 'center' }}>
        <img src={url} alt={title} style={{ height: 200, textAlign: 'center' }} />
      </div>
      <button 
        className="btn" 
        style={{ marginBottom: 20, marginTop: 20}}
        onClick={onLike}
      >
        <FaThumbsUp style={{fontSize: 20, color: 'dodgerblue'}}/>
      </button>

      <input
        min="0"
        max="10"
        type="range"
        style={{ width: '100%' }}
        className="slider"
        onChange={onSliderChange}
        value={sliderVal}
      />
    </div>
  </div>
)