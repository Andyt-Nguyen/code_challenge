import React from 'react';

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

export default ({ title, url }) => (
  <>
    <h4 style={styles.title}>{title}</h4>
    <div style={styles.imgContainer}>
      <img src={url} alt={title} style={styles.img} />
    </div>
  </>
)