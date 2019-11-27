import React from 'react';

export default ({ onChange, value, min, max }) => (
  <input
    min={min}
    max={max}
    type="range"
    style={{ width: '100%' }}
    className="slider"
    onChange={onChange}
    value={value}
  />
)