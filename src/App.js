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
    markedIdArray : []
  };

  memoryMark = id => {
    //below is the previously working code from the example in class

    //What we need here is a way to track clicks and to re-render the cards in a random order. Here are the steps
      //create & display a score as well as a top score
      //in the friends.json, added a "marked" key, and set to 'false' for each object
      //on click of 'x' (for now), object key should be updated to 'true' 
        //Increment score by 1
        //if current score is greater than top score, set top score equal to current score
      //if object clicked was already true, game is over, and restarts.
        //round score is set to 0
        //all friend objecst values for 'marked' are set to 'false'
        //friend cards are re-rendered.

      // var marked = false
    

    
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //We include only friends with an id property not equal to the id being received into this method. 
    // const friends = this.state.friends.filter(friend => friend.id !== id);

    let notMarked = this.state.friends

    notMarked = this.state.friends.filter(friend => friend.id !== id);
    
    console.log(notMarked)
    // Set this.state.friends equal to the new friends array
    //when we update our component's state by removing one of the friend objects, our component re-renders itself.
    // this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  //whenever we map over a list of data and return JSX, 
  //React wants us to give each element a unique key prop. React uses this value internally to help it efficiently render 
  //and re-render components from arrays of data.

  //the key prop is unusual because it's used by React but 
  //isn't actually available for us to use inside of the component we pass it to. We pass the friend id in as a separate prop because we'll need it inside of the FriendCard component.
  render() {
    return (
      <Wrapper>
        <Title>Memory Game!</Title>
        <Score>Memorized: 0  ---  Best Ever: 12</Score>
        {this.state.friends.map(friend => (
          <FriendCard
            memoryMark={this.memoryMark}
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
