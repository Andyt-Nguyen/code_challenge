import React from 'react';

const styles = {
  spacer: {
    marginTop: 20
  }
}
export default ({ style }) => (
  <div style={{ ...styles.spacer, ...style }} />
);