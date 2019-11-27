import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { resetGiph } from '../../../actions'
import { MIN_LIKES } from '../../../utils/constants';

/**
 * Goal of this Higher Order Component
 * is to keep users away from routing to the results
 * page if they have not met the minimum likes
 */

export default ChildComponent => {
  const ComposedComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      props.giph.likedGifs.length < MIN_LIKES 
      ? props.history.push('/')
      : setIsLoading(false);
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