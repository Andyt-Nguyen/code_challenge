import React from 'react';
import { Container, ImageIcon, Button, ColumnCenter } from '../common';

export default (props) => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>
        <i>Sorry the page you're looking for does not exist :(</i>
      </h1>
      <ColumnCenter>
        <ImageIcon 
          url="https://media.giphy.com/media/MarYoZ2BIJUimKydXa/giphy.gif"
          imageStyles={{ width: 400, height: 500}}
          style={{ justifyContent: 'center' }}
        />
        <Button onClick={() => props.history.push('/')}>Go to home page</Button>
      </ColumnCenter>
    </Container>
  )
}