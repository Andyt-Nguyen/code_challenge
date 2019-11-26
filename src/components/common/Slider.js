import React from 'react';

export default ({ onChange, value }) => (
  <input
    min="0"
    max="10"
    type="range"
    style={{ width: '100%' }}
    className="slider"
    onChange={onChange}
    value={value}
  />
)