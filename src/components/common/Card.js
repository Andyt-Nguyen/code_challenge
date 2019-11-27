import React from 'react';

export default ({ title, children, style, titleStyle }) => (
  <div className="card" style={{ ...style }}>
    <h1 style={{ marginTop: 20, paddingTop: 20, ...titleStyle }}>{title}</h1>
    {children}
  </div>
)