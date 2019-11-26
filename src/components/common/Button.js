import React from 'react';

const styles = {
  btnStyle: { 
    marginBottom: 20, 
    marginTop: 20,
    color: 'dodgerblue',
    fontSize: 18
  }
};

export default ({onClick, style, children}) => (
  <button 
    className="btn" 
    style={{...styles.btnStyle, ...style}}
    onClick={onClick}
  >
    { children }
  </button>
)