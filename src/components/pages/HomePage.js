import React from 'react';
import { Container, Result } from '../common';


const HomePage = () => {
  return (
    <Container>
      <div className="home_container">
        <aside className="search_gif_container">
          <p className="word_spacing">
          Lorem ipsum dolor amet chia franzen portland poutine kogi tousled vegan adaptogen umami yuccie four loko air plant cray VHS cred. Fashion axe kinfolk dreamcatcher pop-up semiotics food truck hot chicken knausgaard bespoke asymmetrical master cleanse before they sold out polaroid enamel pin.
          </p>

          <p className="word_spacing" style={{marginTop: 20}}>
          Lorem ipsum dolor amet chia franzen portland poutine kogi tousled vegan adaptogen umami yuccie four loko air plant cray VHS cred. Fashion axe kinfolk dreamcatcher
          </p>

        <div style={{marginTop: 55}}>
          <label style={{display: "block", marginBottom: 10}}>Search Term</label>
          <input className="search_input" />
          <button className="submit_btn">Submit</button>
        </div>
        
        <Result />
        </aside>

        <aside className="liked_container">

        </aside>
      </div>
    </Container>
  )
};

export default HomePage;