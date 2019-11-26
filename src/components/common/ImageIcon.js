import React from 'react';
import Image from './Image';

const styles = {
  btn: {
    position:'absolute', 
    margin: 10, 
    right: 0, 
    top: 0,
    borderRadius: '50%',
    fontSize: 20,
    border: 'none',
    background: 'none'
  },

  title: {
    textAlign: 'center', 
    textTransform: 'capitalize'
  },

  resultTitle: { 
    position: 'relative', 
    marginLeft: 5 
  },
};

export default ({ title ,onClick, Icon, url, imageStyles }) => (
  <div>
    <h4 style={styles.title}>{title}</h4>
    <div style={styles.resultTitle}>
      <button style={{ border: 'none', ...styles.btn }} onClick={onClick}>
        { Icon }
      </button>
      <Image alt={title} url={url} style={imageStyles} />
    </div>
  </div>
)