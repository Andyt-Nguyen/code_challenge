import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { resetGiph } from '../../../actions'

/**
 * Goal of this Higher Order Component
 * is to keep users away from routing to the results
 * page if they have not met the max likes
 */

export default ChildComponent => {
  const ComposedComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if(props.giph.likedGifs.length <= 4) {
        props.history.push('/')
      } else {
        setIsLoading(false);
      }
    }, [props.giph.likedGifs, props.history]);

    return (
        isLoading
        ? <div>Loading</div>
        : <ChildComponent {...props} />
    )
  }


  const mapStateToProps = (state) => state;
  return connect(mapStateToProps, { resetGiph })(ComposedComponent);
}