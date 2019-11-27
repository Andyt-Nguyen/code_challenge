import React from 'react';

export default ({ alt, url, style }) => {
  return (
    <img alt={alt} style={{ width: 250, height: 250, marginTop: 5, ...style }} src={url} />
  )
}