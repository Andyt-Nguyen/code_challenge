import React from 'react';

export default ({ onChange, onSubmit, inputValue }) => (
  <form onSubmit={onSubmit}>
    <label style={{display: "block", marginBottom: 10}}>Search Term</label>
    <input 
      className="search_input" 
      onChange={onChange}
      value={inputValue}
    />
    <button
     className="submit_btn"
     type="submit"
    >Submit</button>
  </form>
)