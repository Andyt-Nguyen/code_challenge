import React from 'react';
import { Container, ImageIcon } from '../common';

export default () => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>
        <i>Sorry the page your looking for does not exist :(</i>
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <ImageIcon 
          url="https://media.giphy.com/media/MarYoZ2BIJUimKydXa/giphy.gif"
          imageStyles={{ width: 400, height: 500}}
          style={{ justifyContent: 'center' }}
        />
      </div>
    </Container>
  )
}