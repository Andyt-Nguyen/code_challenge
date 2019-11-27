import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaThumbsUp, FaTrash } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import {
  onSearchChange,
  fetchGiph,
  likeGiph,
  unLikeGiph,
  clearGiph
} from '../../actions';
import {
  Container,
  SearchForm,
  Description,
  Card,
  ColumnCenter,
  ImageText,
  Button,
  Slider,
  ImageIconList,
  Modal
} from '../common';
import { MIN_LIKES } from '../../utils/constants';

const HomePage = (props) => {
  // Local state
  const [sliderVal, setSlider] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Update reducer when you user searches for gif
  const onInputChange = (e) => {
    props.onSearchChange(e.target.value);
  };

  // Makes a call to the gif api on the user's search
  const onSubmit = async (e) => {
    e.preventDefault();
    setSlider(0);
    await props.fetchGiph(0, props.giph.searchTerm);
    setIsLiked(false);
  };

  // Updates local state when slider changes
  const onSliderChange = async (e) => {
    const val = parseInt(e.target.value)
    setSlider(val);
    await props.fetchGiph(val, props.giph.searchTerm);
  };

  // Adds a gif to the likedGif array (store) in reducer only if 
  // they have not reached the max likes
  const onLike = () => {
    const isUsed = props.giph.likedGifs.find(gif => gif.name === props.giph.searchTerm);
    if (isUsed && Object.values(isUsed).length > 0) {
      setIsLiked(true);
      return;
    };
    const gifObj = {
      name: props.giph.searchTerm,
      url: props.giph.currGif.data.images.original.url,
      weirdVal: sliderVal
    }
    props.likeGiph(gifObj);
    setVisible(true);
  };

  // Removes gif from the gifLikes array (store)
  const onDelete = (name) => {
    props.unLikeGiph(name);
  };

  // Displays modal
  const onModalClick = () => {
    props.onSearchChange('');
    props.clearGiph();
    setVisible(false);
  };

  return (
    <Container>

      <Modal title="LETS GO TO THE NEXT GIF" isVisible={isVisible}>
        <IoMdCheckmarkCircleOutline style={styles.icon} />
        <Button onClick={onModalClick} style={{ width: 200, padding: 10 }}>Yes!</Button>
      </Modal>

      <div className="home_container">

        <aside className="search_gif_container">
          <Description>
            Lorem ipsum dolor amet chia franzen portland poutine kogi tousled vegan adaptogen umami yuccie four loko air plant cray VHS cred. Fashion axe kinfolk dreamcatcher pop-up semiotics food truck hot chicken knausgaard bespoke asymmetrical master cleanse before they sold out polaroid enamel pin.
          </Description>

          <div style={styles.spacer} />

          <Description>
            Lorem ipsum dolor amet chia franzen portland poutine kogi tousled vegan adaptogen umami yuccie four loko air plant cray VHS cred. Fashion axe kinfolk dreamcatcher
          </Description>

          <div style={styles.spacer} />

          <SearchForm
            onChange={onInputChange}
            onSubmit={onSubmit}
            inputValue={props.giph.searchTerm}
          />

          {isLiked && <p style={styles.error}>You have already liked this search term. Please search for another gif.</p>}

          <p style={styles.error}>{props.giph.errorMsg}</p>

          {
            Object.values(props.giph.currGif).length > 0 &&
            <Card title="Your result">
              <ColumnCenter>
                <ImageText
                  loading={props.giph.loading}
                  title={props.giph.currGif.data.title}
                  url={props.giph.currGif.data.images.original.url}
                />
                <Button style={{ width: 200 }} onClick={onLike}>
                  <FaThumbsUp />
                </Button>
              </ColumnCenter>
              <p style={{ color: 'dodgerblue' }}>Weridness Level: {sliderVal}</p>
              <Slider onChange={onSliderChange} value={sliderVal} />
            </Card>
          }
        </aside>

        <aside className="liked_container">
          <ImageIconList
            data={props.giph.likedGifs}
            onClick={onDelete}
            Icon={<FaTrash style={{ color: 'crimson' }} />}
            imageStyles={styles.imageStyle}
          />

          {
            props.giph.likedGifs.length < MIN_LIKES &&
            <p style={props.giph.likedGifs.length <=0 ? { color: 'dodgerblue', textAlign:'center' } : styles.pStyle}>
              You need {MIN_LIKES - props.giph.likedGifs.length} more likes to find out your weirdness
            </p>
          }

          {
            props.giph.likedGifs.length >= MIN_LIKES &&
            <div style={styles.btnContainer}>
              <Button
                style={{ width: '100%' }}
                onClick={() => props.history.push('/result')}
              >
                Calculate My Weirdness Score
              </Button>
            </div>
          }
        </aside>
      </div>
    </Container>
  )
};

// Inline styles
const styles = {
  btnContainer: {
    width: '90%',
    margin: 'auto',
  },
  icon: {
    color: '#00aeef',
    fontSize: 100,
    marginTop: 30
  },
  error: {
    color: 'crimson',
    marginTop: 10
  },
  pStyle: {
    textAlign: 'center',
    color: 'dodgerblue',
    marginTop: 10
  },
  spacer: {
    marginTop: 20
  },
  imageStyle: {
    width: 150,
    height: 150
  }
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {
  onSearchChange,
  fetchGiph,
  likeGiph,
  unLikeGiph,
  clearGiph
})(HomePage);