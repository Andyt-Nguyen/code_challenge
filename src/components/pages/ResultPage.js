import React from 'react';
import { ImageIconList, Button, requireGifs } from '../common';
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

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
        <h3>You scored {roundUp}/{MAX_AMOUNT}</h3>
      </div>

      <ImageIconList
        style={{ justifyContent: 'space-around' }}
        Icon={<div />}
        data={props.giph.likedGifs}
      />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={styles.btnStyle} onClick={startOver}>
          Start Over
        </Button>
      </div>

    </div>
  )
};

// Inline styles
const styles = {
  btnStyle: {
    width: 200,
    padding: 10
  }
};

export default requireGifs(ResultPage);