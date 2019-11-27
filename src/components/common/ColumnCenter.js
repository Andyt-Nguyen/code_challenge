import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default ({ children }) => (
  <div style={styles.container}>{children}</div>
)