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
  ? <div style={styles.imgContainer}><Loader type="Puff" color="#00BFFF" height={240} width={240} /></div>
  : <>
      <h4 style={styles.title}>{title}</h4>
      <div style={styles.imgContainer}>
        <img src={url} alt={title} style={{...styles.img, ...imageStyles}} />
      </div>
    </>    
)