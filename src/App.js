import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import giphys from "./giphys.json";
import Score from "./components/Score";
import Message from "./components/Message";

class App extends Component {
  // Setting this.state.giphys to the giphys json array
  //same as giphys : giphys
  //when defining object properties with ES6, 
  //if the object's key and value have the same name, 
  //we can omit the colon — this is just an optional shorthand syntax.
  state = {
    giphys,
    //my logic is based on prime numbers, so we start with marked being equal to a unique prime number.
    marked : 43,
    resultMessage: "Click on any character to start",
    score : 0,
    topScore: 0
  };

//once everything is all locked & loaded, we gotta roll the dice!
componentDidMount(){
  this.setState({giphys: this.randomize(this.state.giphys)});
}

//randomize an array to shuffle the order of the cards.
randomize = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

    //On each click of a card...
  markIt = id => {

      //Testing: logs the id of the clicked card.
      //All card ids are unique prime numbers.
      // console.log(id)

      //Testing: multiply the marked state by the id. 
      // this.setState({marked: this.state.marked * id})

      //Testing: divide the marked state by the id. if the remainder is 0, it's a number/id that has already been used.
      // console.log(this.state.marked % id)

    //   // you chose a card that you chose already - GAME OVER
        if (this.state.marked % id === 0) {
    //       //reset the marked array to an empty array, set score to 0
          this.setState({
          marked : 43, 
          score : 0, 
          resultMessage: "You guessed wrong."})
    //     //Shuffle the cards and re-render
        this.randomize(this.state.giphys);  

    //     //otherwise, you must have chosen a new character
      } else {

         //increment top score if necessary
         if (this.state.score === this.state.topScore) {
          this.setState({
            topScore: this.state.score + 1
          })
        }       
        //You guessed right! Game on, my friend. 
        this.setState({
    //     //store the id of the character you chose in the marked array
          marked: this.state.marked * id,
    //       //increment your score
          score: this.state.score + 1,
    //       //display positive message
          resultMessage: "You got it right!"
        })

    //     //Shuffle the cards and re-render
        this.randomize(this.state.giphys);  

    }
  };

 
  render() {
    return (
      <Wrapper>
        <Title>'Member Giphys!</Title>
        <Message>{this.state.resultMessage}</Message>
        <Score>'Memberized: {this.state.score}  ▩  Bestest Ever: {this.state.topScore}</Score>
        {this.state.giphys.map(friend => (
          <FriendCard
            markIt={this.markIt}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
