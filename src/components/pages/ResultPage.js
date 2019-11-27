import React from 'react';
import { ImageIconList, Button, requireGifs, Container } from '../common';
import { MAX_AMOUNT } from '../../utils/constants';

const ResultPage = (props) => {
  const calcAvg = (
    props.giph.likedGifs.reduce((initial, obj) => initial + obj.weirdVal, 0) /
    (props.giph.likedGifs.length * MAX_AMOUNT)
  );
  const roundUp = Math.round(calcAvg * MAX_AMOUNT);

  const startOver = () => {
    props.resetGiph();
    props.history.push('/');
  };

  const rating = (giphArray) => {
    return giphArray.map(giph => ({...giph, description: `${giph.weirdVal}/${MAX_AMOUNT}`}));
  }
  return (
    <Container>
      <div style={styles.result}>
        <h3>You scored {roundUp}/{MAX_AMOUNT}</h3>
      </div>

      <ImageIconList
        Icon={<div />}
        data={rating(props.giph.likedGifs)}
      />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={styles.btnStyle} onClick={startOver}>
          Start Over
        </Button>
      </div>
    </Container>
  )
};

// Inline styles
const styles = {
  btnStyle: {
    width: 200,
    padding: 10
  },

  result: {
    display: 'flex', 
    justifyContent: 'center', 
    marginBottom: 40
  }
};

export default requireGifs(ResultPage);