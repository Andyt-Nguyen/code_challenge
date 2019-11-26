import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Result, SearchForm } from '../../common';
import { onSearchChange, fetchGiph, likeGiph, unLikeGiph } from '../../../actions';
import Description from './Description';
import LikedGiphs from './LikedGiphs';

const HomePage = (props) => {
  const [sliderVal, setSlider] = useState(0);

  const onInputChange = (e) => {
    props.onSearchChange(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setSlider(0);
    await props.fetchGiph(0, props.giph.searchTerm);

  }

  const onSliderChange = async (e) => {
    setSlider(e.target.value);
    await props.fetchGiph(e.target.value, props.giph.searchTerm);
  }

  const onLike = () => {
    const gifObj = {
      name: props.giph.searchTerm,
      url: props.giph.currGif.data.images.original.url,
      weirdVal: sliderVal
    }
    props.likeGiph(gifObj);
  }

  const onUnLike = (name) => {
    props.unLikeGiph(name);
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
            onSubmit={onSubmit}
          />

          {
            Object.values(props.giph.currGif).length > 0 &&
              <Result 
                title={props.giph.currGif.data.title} 
                url={props.giph.currGif.data.images.original.url} 
                onLike={onLike}
                onSliderChange={onSliderChange}
                sliderVal={sliderVal}
              />
          }
        </aside>

        <aside className="liked_container">
          <LikedGiphs 
            data={props.giph.likedGifs} 
            unLike={onUnLike}
          />

          {
            props.giph.likedGifs.length > 4 && 
            <div style={{ width: '90%', margin: 'auto' }}>
            <button 
              style={{ 
                width: '100%',
                background: 'dodgerblue',
                border: 'none',
                padding: 10,
                color: 'white',
                borderRadius: 5,
                fontSize: 15,
                textAlign: 'center'
                }}
            >
                Calculate My Weirdness Score
            </button>
          </div>
          }
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
  fetchGiph,
  likeGiph,
  unLikeGiph
})(HomePage);