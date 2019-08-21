import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      cocktails: {},
     
    };
  }

  async componentDidMount() {
    const margResponse = await axios(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    );
    const manhattanResponse = await axios(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=manhattan'
    );
    const ginResponse = await axios(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin_and_tonic'
    );
    const mojitoResponse = await axios(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito'
    );
    const martiniResponse = await axios(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'
    );
    const margData = margResponse.data;
    const manhattanData = manhattanResponse.data;
    const ginData = ginResponse.data;
    const mojitoData = mojitoResponse.data;
    const martiniData = martiniResponse.data;
    this.setState({
     
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Test Header</h1>
        <div className='margarita'>
          <h2>{this.state.margarita.name}</h2>
          <h3>{this.state.margarita.alcoholic}</h3>
          <h3>{this.state.margarita.glass}</h3>
          <h3>{this.state.margarita.instructions}</h3>
          <h3>ingredients: {this.state.margarita.ingredients}</h3>
        </div>

        <div className='manhattan'>
          <h2>{this.state.manhattan.name}</h2>
          <h3>{this.state.manhattan.alcoholic}</h3>
          <h3>{this.state.manhattan.glass}</h3>
          <h3>{this.state.manhattan.instructions}</h3>
          <h3> ingredients: {this.state.manhattan.ingredients}</h3>
        </div>

        <div className='gin_and_tonic'>
          <h2>{this.state.gin_and_tonic.name}</h2>
          <h3>{this.state.gin_and_tonic.alcoholic}</h3>
          <h3>{this.state.gin_and_tonic.glass}</h3>
          <h3>{this.state.gin_and_tonic.instructions}</h3>
          <h3> ingredients: {this.state.gin_and_tonic.ingredients}</h3>
        </div>

        <div className='mojito'>
          <h2>{this.state.mojito.name}</h2>
          <h3>{this.state.mojito.alcoholic}</h3>
          <h3>{this.state.mojito.glass}</h3>
          <h3>{this.state.mojito.instructions}</h3>
          <h3>ingredients: {this.state.mojito.ingredients}</h3>
        </div>

        <div className='martini'>
          <h2>{this.state.martini.name}</h2>
          <h3>{this.state.martini.alcoholic}</h3>
          <h3>{this.state.martini.glass}</h3>
          <h3>{this.state.martini.instructions}</h3>
          <h3>ingredients: {this.state.martini.ingredients}</h3>
        </div>
      </div>
    );
  }
}

export default App;
