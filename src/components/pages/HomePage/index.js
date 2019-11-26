import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, SearchForm, Description, Card, ColumnCenter, ImageText, Button, Slider, ImageIconList, Modal } from '../../common';
import { onSearchChange, fetchGiph, likeGiph, unLikeGiph } from '../../../actions';
import { FaThumbsUp, FaTrash } from "react-icons/fa";
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
const styles = {
    btnContainer: { 
      width: '90%', 
      margin: 'auto',
    },
    icon: {
      color: '#00aeef',
      fontSize: 100,
      marginTop: 30
    }
}

const HomePage = (props) => {
  const [sliderVal, setSlider] = useState(0);
  const [isVisible, setVisible] = useState(false);

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
    setVisible(true);
  }

  const onDelete = (name) => {
    props.unLikeGiph(name);
  }

  return (
    <Container>

      <Modal title="LETS GO TO THE NEXT GIF" isVisible={isVisible}>
        <IoMdCheckmarkCircleOutline style={styles.icon}/>
        <div>
          <Button onClick={() => setVisible(false)} style={{width: 200, padding: 10}}>Yes!</Button>
        </div>
      </Modal>

      <div className="home_container">

        <aside className="search_gif_container">
          <Description>
            Lorem ipsum dolor amet chia franzen portland poutine kogi tousled vegan adaptogen umami yuccie four loko air plant cray VHS cred. Fashion axe kinfolk dreamcatcher pop-up semiotics food truck hot chicken knausgaard bespoke asymmetrical master cleanse before they sold out polaroid enamel pin.
          </Description>

          <div style={{ marginTop: 20 }} />

          <Description>
            Lorem ipsum dolor amet chia franzen portland poutine kogi tousled vegan adaptogen umami yuccie four loko air plant cray VHS cred. Fashion axe kinfolk dreamcatcher
          </Description>

          <div style={{ marginTop: 20 }} />

          <SearchForm
            onChange={onInputChange}
            onSubmit={onSubmit}
            value={props.giph.searchTerm}
          />


          { 
            Object.values(props.giph.currGif).length > 0 &&
            <Card title="Your result">
              <ColumnCenter>
                <ImageText 
                  title={props.giph.currGif.data.title} 
                  url={props.giph.currGif.data.images.original.url}
                />
                <Button style={{ width: 200 }} onClick={onLike}>
                  <FaThumbsUp />
                </Button>
              </ColumnCenter>

              <Slider onChange={onSliderChange} value={sliderVal} />
            </Card>
          }
          
        </aside>

        <aside className="liked_container">

          <ImageIconList 
            data={props.giph.likedGifs} 
            onClick={onDelete}
            Icon={<FaTrash style={{ color: 'crimson'}} />}
            imageStyles={{width: 150, height: 150}}
          />

          {
            props.giph.likedGifs.length > 4 && 
            <div style={styles.btnContainer}>
              <Button style={{width: '100%'}}>
                Calculate My Weirdness Score
              </Button>
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