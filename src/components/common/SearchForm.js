import React from 'react';
import Loader from 'react-loader-spinner'
export default ({ onChange, onSubmit, inputValue, loading }) => (
  <form onSubmit={onSubmit}>
    <label style={{display: "block", marginBottom: 10}}>Search Term</label>
    <div style={{ display: 'flex', alignItems: 'center'}}>
    <input
      required
      className="search_input" 
      onChange={onChange}
      value={inputValue}
    />

    { loading 
      ? <Loader type="Puff" color="#00BFFF" height={50} width={50} />
      : <button className="submit_btn" type="submit">Submit</button>
    }
    </div>
  </form>
)