import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Nuggets from "./components/Nuggets";
import Footer from "./components/Footer";
import food from "./Nuggets.json";
import "./App.css";

class App extends Component {
  state = {
    food,
    clickedfood: [],
    score: 0
 
  };

  imageClick = event => {
    const currentNuggets = event.target.alt;
    const NuggetsAlreadyClicked =
      this.state.clickedfood.indexOf(currentNuggets) > -1;


    if (NuggetsAlreadyClicked) {
      this.setState({
        food: this.state.food.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedfood: [],
        score: 0
      });
        alert("Better luck next time! Try again?");


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