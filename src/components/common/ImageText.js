import React from 'react';
import Loader from 'react-loader-spinner';

const styles = {
  title: {
    textTransform: 'capitalize',
    margin: 10
  },

  imgContainer: {
    width: 400, 
    textAlign: 'center'
  },

  img: {
    height: 200, 
    textAlign: 'center'
  }
};

export default ({ title, url, imageStyles, loading }) => (
  loading 
  ? <Loader type="Puff" color="#00BFFF" height={50} width={50} />
  : <>
      <h4 style={styles.title}>{title}</h4>
      <div style={styles.imgContainer}>
        <img src={url} alt={title} style={{...styles.img, ...imageStyles}} />
      </div>
    </>    
)