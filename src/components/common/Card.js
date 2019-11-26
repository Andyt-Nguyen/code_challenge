import React from 'react';

export default ({ title, children }) => (
  <div className="card">
    <h1 style={{ marginTop: 20, paddingTop: 20, paddingBottom: 20 }}>{title}</h1>
    { children }
  </div>
)