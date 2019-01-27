import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score";

class App extends Component {
  // Setting this.state.friends to the friends json array
  //same as friends : friends
  //when defining object properties with ES6, 
  //if the object's key and value have the same name, 
  //we can omit the colon — this is just an optional shorthand syntax.
  state = {
    friends,
    markedArray : [1, 2, 3],
    resultMessage: "Click on any character to start",
    score : 0,
    topScore: 0
  };

  markIt = id => {

    //On each click of a card...
      //compare the id of the clicked card to the values in markedArray. 
      for (var i = 0; i<this.markedArray.length; i++){
      
      //you chose a card that you chose already - GAME OVER
        if (this.markedArray[i] === id) {
          //reset the marked array to an empty array, set score to 0
        this.setState({markedArray : [], score : 0, resultMessage: "You guessed wrong that time."})
        //Shuffle the cards and re-render

        //otherwise, you must have chosen a new character
      } else {
        
        this.setState({
        //store the id of the character you chose in the marked array
          markedArray: this.markedArray.push(id), 
          //increment your score
          score: this.state.score + 1,
          //display positive message
          resultMessage: "You got it right!"
        
        })
        //increment top score if necessary
          if (this.state.score > this.state.topScore) {
          this.setState({
            topScore: this.state.score
          })
        }

        //Shuffle the cards and re-render
      }
    }
  };

 
  render() {
    return (
      <Wrapper>
        <Title>Memory Game!</Title>
        <Score>{this.state.resultMessage}</Score>
        <Score>Memorized: {this.state.score}  ---  Best Ever: {this.state.topScore}</Score>
        {this.state.friends.map(friend => (
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
