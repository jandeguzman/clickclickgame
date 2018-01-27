//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Nuggets from "./components/Nuggets";
import Footer from "./components/Footer";
import food from "./Nuggets.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    food,
    clickedfood: [],
    score: 0
 
  };

//when you click on a card ... the food is taken out of the array
  imageClick = event => {
    const currentNuggets = event.target.alt;
    const NuggetsAlreadyClicked =
      this.state.clickedfood.indexOf(currentNuggets) > -1;

//if you click on a food that has already been selected, the game is reset and cards reordered
    if (NuggetsAlreadyClicked) {
      this.setState({
        food: this.state.food.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedfood: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available food, your score is increased and cards reordered
    } else {
      this.setState(
        {
          food: this.state.food.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedfood: this.state.clickedfood.concat(
            currentNuggets
          ),
          score: this.state.score + 1
        },
//if you get all 12 food correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              food: this.state.food.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedfood: [],
              score: 0
            });
          }
        }
      );
    }
  };


  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.food.map(food => (
            <Nuggets
              imageClick={this.imageClick}
              id={food.id}
              key={food.id}
              image={food.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;