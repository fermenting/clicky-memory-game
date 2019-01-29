# Member Giphys
_Your only foe...is your own mind!_

[**PLAY NOW**](http://fermenting.github.io/clicky-memory-game)

![Well Hello There!](https://media.giphy.com/media/xT9IgB5Q6QYqarxeIU/giphy.gif)

## Concept
Member Giphys is a simple memory game built with [React](https://reactjs.org/). This game was a fun way for me to test my own memory of how to code, and to develop in React using [ECMA 6](https://www.w3schools.com/js/js_es6.asp).

## Gameplay

The game play starts simply, all you have to do is click on any of the quirky characters to start. Your 'Memberized score goes up by a point, but the characters have shuffled.

_"What sorcery is this?"_ You may ask? Not to worry, simply choose another **unique** character. Choose someone you've already chosen and it's game over.

 Although they are all distinctive, you will have to remember each and every one if you want to attain the Bestest Ever Score.


## Technologies

* **React** - This was the big one. I was introduced to React a week ago, but had a ton of help from my instructor, TAs, and peers. It's been frustrating at times because of syntax & learning the "state" property, but I like the modular structure and the relative ease of building a page.

* **ECMA 6** - Not sure if truly counts, but I've been learning ECMA 6 at the same time as learning react, so I've been trying to implement it in my code.

* **Math** - The original technology. I was pretty pleased with myself for figuring out a way using prime numbers to track elements. I think my system would break down with a larger data set, like if there were 50 characters, but it worked well for this app.

## Code Example

The hardest part for me was tracking unique clicks. I decided to make each character have a unique ID that was a prime number. 
~~~
giphys.json

{   "id": 3,
    "image": "https://media.giphy.com/media/3oFzmeVbeXIfBUl5sI/giphy.gif"
  },
  { "id": 5,
    "image": "https://media.giphy.com/media/3o7aCQi2ZBq46pjkek/giphy.gif"
  },
  { "id": 7,
    "image": "https://media.giphy.com/media/3osBLvjxJSDISN8V2g/giphy.gif"
  },
~~~

Then, I set a key in the state which was also a prime number, unique from any of the other objects.
~~~
App.js

state = {
  ...
    marked : 2,
  ...
~~~

Next, as objects were clicked, the value of marked was multiplied by the id of the object.
~~~
App.js

this.setState({
    ...
          marked: this.state.marked * id,
    ...    })
~~~

Finally, to check for the case if a number had been clicked twice, the value of 'marked' was divided by the id of the clicked object.
~~~
App.js
        if (this.state.marked % id === 0) {
          [GAME OVER]
        }
~~~

To test that this approach works, I found the product of all numbers used. For each number used, I divided the product of all numbers by one of the prime numbers used, and then divided it again by the same prime number. If the remainder is 0 for any result, than that would indicate an erroneous game over condition. 

if (product/primeNum % primeNum !== 0) {no false positives}



## Styling

I was playing memory games like this in the early 90's, so I tried to style my 'Member Giphys in that vain - Strange pastel colors, images that look like they could be on the bottom of a skate board, and southpark references. That's what we dug at the time!

## Thanks

Big Thanks to Jerome, Sasha, Jimmy, Ryan, Zoe, & Jacob for the confidence and helpful hints.

[![Bender said it best: Remember Me!](https://i.ytimg.com/vi/AYURxfaTdpY/maxresdefault.jpg)](https://www.youtube.com/watch?v=AYURxfaTdpY)

