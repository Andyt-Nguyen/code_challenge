import React from 'react';

export default ({ children }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '80vh', overflow:'scroll' }}>
    { children }
  </div>
)