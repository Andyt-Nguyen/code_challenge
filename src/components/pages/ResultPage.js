import React from 'react';
import { connect } from 'react-redux';
import { resetGiph } from '../../actions'
import { Header, ImageIconList, Button } from '../common';

const ResultPage = (props) => {
  const calcAvg = (
    props.giph.likedGifs.reduce((initial, obj) => initial + obj.weird, 0) / 
    (props.giph.likedGifs.length * 10)
  );
  const roundUp = Math.round(calcAvg * 10);

  const startOver = () => {
    props.resetGiph();
    props.history.push('/');
  };

  return (
    <div>
      <Header />
      <div style={{ display:'flex', justifyContent:'center', marginBottom: 40}}>
      <h3>You scored {roundUp}/10</h3>
      </div>

      <ImageIconList
        style={{ justifyContent: 'space-around'}} 
        Icon={<div/>}
        data={props.giph.likedGifs}
      />

      <div style={{ display:'flex', justifyContent:'center'}}>
        <Button 
          style={{ width: 200, padding: 10}}
          onClick={startOver}
        >
          Start Over
        </Button>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {
  resetGiph
})(ResultPage);