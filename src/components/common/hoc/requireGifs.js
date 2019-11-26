import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { resetGiph } from '../../../actions'

export default ChildComponent => {
  const ComposedComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if(props.giph.likedGifs.length <= 4) {
        props.history.push('/')
      } else {
        setIsLoading(false);
      }
    }, []);

    return (
        isLoading
        ? <div>Loading</div>
        : <ChildComponent {...props} />
    )
  }


  const mapStateToProps = (state) => {
    return state;
  }
  return connect(mapStateToProps, { resetGiph })(ComposedComponent);
}