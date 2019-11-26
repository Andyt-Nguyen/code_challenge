import React from 'react';

export default ({ onChange, onSubmit }) => (
  <>
    <label style={{display: "block", marginBottom: 10}}>Search Term</label>
    <input 
      className="search_input" 
      onChange={onChange}
    />
    <button
     className="submit_btn"
     onClick={onSubmit}
    >Submit</button>
  </>
)