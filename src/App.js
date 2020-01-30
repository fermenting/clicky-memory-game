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
  state = {
    giphys,
    //set 'marked' equal to a unique prime number.
    marked : 2,
    resultMessage: "Pick any character to start...",
    score : 0,
    topScore: 0
  };

//once compenenet is loaded, randomize the order of the memory tiles!
componentDidMount(){
  this.setState({giphys: this.randomize(this.state.giphys)});
}

//randomize an array to shuffle the order of the cards.
randomize = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

    //On each click of a card...
  markIt = id => {

      
      //All card ids are unique prime numbers.
      
      //divide the marked state by the id. if the remainder is 0, it's a number/id that has already been used.
         // you chose a card that you chose already - GAME OVER
        if (this.state.marked % id === 0) {
    //       //reset the marked array to an empty array, set score to 0
          this.setState({
          marked : 2, 
          score : 0, 
          resultMessage: "You picked that one already! \nCan you make all the way to " + giphys.length + "?"})
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
        <Message>Just don't pick the same character twice.</Message>
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
