import React from 'react';
import { FaThumbsUp } from "react-icons/fa";

export default ({ title, url }) => (
  <div className="result">
    <h1 style={{ marginTop: 20 }}>Your Result</h1>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h4 style={{textTransform: 'capitalize'}}>{title}</h4>
      <div style={{ width: 400 }}>
        <img src={url} alt={title} style={{ height: 200 }} />
      </div>
      <button className="btn" style={{ marginBottom: 20, marginTop: 20}}>
        <FaThumbsUp style={{fontSize: 20, color: 'dodgerblue'}}/>
      </button>
    </div>
  </div>
)