import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Result, SearchForm } from '../../common';
import { onSearchChange, fetchGiph } from '../../../actions';
import Description from './Description';

const HomePage = (props) => {
  const [sliderVal, setSlider] = useState(0);

  const onInputChange = (e) => {
    props.onSearchChange(e.target.value);
  }

  const fetchGiph = async () => {
    setSlider(0);
    await props.fetchGiph(0, props.giph.searchTerm);
    console.log(props);
  }

  const onSliderChange = async (e) => {
    setSlider(e.target.value);
    await props.fetchGiph(e.target.value, props.giph.searchTerm);
  }

  return (
    <Container>
      <div className="home_container">
        <aside className="search_gif_container">
          <Description />

          <div style={{ marginTop: 55 }}></div>

          <SearchForm
            onChange={onInputChange}
            value={props.giph.searchTerm}
            onSubmit={fetchGiph}
          />

          {
            Object.values(props.giph.currGif).length > 0 &&
            <>
              <Result title={props.giph.currGif.data.title} url={props.giph.currGif.data.images.original.url} />
              <input
                min="0"
                max="10"
                type="range"
                style={{ width: '100%' }}
                className="slider"
                onChange={onSliderChange}
                value={sliderVal}
              />
            </>
          }
          
          
        </aside>

        <aside className="liked_container">

        </aside>
      </div>
    </Container>
  )
};

const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps, {
  onSearchChange,
  fetchGiph
})(HomePage);