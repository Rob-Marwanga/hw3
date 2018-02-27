// React Poker

// GOAL
// When the application is launched, show five face down cards, and a button that
// reads "Deal a new hand". Each time the "deal a new hand" button is clicked, show
// five random, unique playing cards.

// HINTS
// - The initial state of the state object is already set for you.
// - You can create an array of JSX elements and add them to the return of the render() function in
// - one line. The framework for doing this is already there.
// - Add an element to an array by using the .push() function
// - Grab the few n elements of an array by using the .splice() function, e.g. myArray.splice(0, n)
// - The card images follow this convention: http://golearntocode.com/images/cards/8_of_diamonds.png
// - Calling shuffledDeck() will give you an array of 52 strings, representing the rank and suit of
//   each card, in random order
// - Start by getting the five face down cards to show, then use the React developer tools in Chrome
//   to manipulate state manually, then write an event handler function and corresponding button.
import React, { Component } from 'react';
import shuffledDeck from './ShuffledDeck';
import './App.css';
import card_back from './card_back.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      hand: [card_back, card_back, card_back, card_back, card_back]
    }
  }

shuffledDeck() {
  let newDeck = shuffledDeck()
  this.setState({
    hand: ["http://golearntocode.com/images/cards/"+newDeck[0]+".png","http://golearntocode.com/images/cards/"+newDeck[1]+".png","http://golearntocode.com/images/cards/"+newDeck[2]+".png","http://golearntocode.com/images/cards/"+newDeck[3]+".png","http://golearntocode.com/images/cards/"+newDeck[4]+".png"]
  })

}

  render() {
    // array to hold JSX elements
    let cards= [this.state.hand[0],this.state.hand[1],this.state.hand[2],this.state.hand[3], this.state.hand[4]]
    return (
      <div className="App">
        <h1>
          <img src={cards[0]} alt={card_back}/>
          <img src={cards[1]} alt={card_back}/>
          <img src={cards[2]} alt={card_back}/>
          <img src={cards[3]} alt={card_back}/>
          <img src={cards[4]} alt={card_back}/>
        </h1>
        <p><button href="#" onClick={()=>this.shuffledDeck()}>Deal a new hand</button></p>
      </div>
    );
  }
}

export default App;
