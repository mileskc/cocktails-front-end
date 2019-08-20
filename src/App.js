import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      margarita: {},
      manhattan: {},
      gin_and_tonic: {},
      mojito: {},
      martini: {}
    }
  }
  
  async componentDidMount() {
<<<<<<< HEAD
    const response = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`);
    const data = response.data;
=======
    const margResponse = await axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const manhattanResponse = await axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=manhattan');
    const ginResponse = await axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin_and_tonic')
    const mojitoResponse = await axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito');
    const martiniResponse = await axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini');
    const margData = margResponse.data;
    const manhattanData = manhattanResponse.data;
    const ginData = ginResponse.data;
    const mojitoData = mojitoResponse.data;
    const martiniData = martiniResponse.data;
>>>>>>> f1e18c6937be283a3b05864364cfdcc9eb52d97b
    this.setState({
        margarita: {
          name: margData.drinks[0].strDrink,
          alcoholic: margData.drinks[0].strAlcoholic,
          glass: margData.drinks[0].strGlass,
          instructions: margData.drinks[0].strInstructions
        },
        manhattan: {
          name: manhattanData.drinks[0].strDrink
        },
        gin_and_tonic: {
          name: ginData.drinks[0].strDrink
        },
        mojito: {
          name: mojitoData.drinks[0].strDrink
        },
        martini: {
          name: martiniData.drinks[0].strDrink
        }
    })
  }

  render() {
  return (
    <div className="container">
      <h1>Test Header</h1>
      <div class='margarita'>
        <h2>{this.state.margarita.name}</h2>
        <h3>{this.state.margarita.alcoholic}</h3>
        <h3>{this.state.margarita.glass}</h3>
        <h3>{this.state.margarita.instructions}</h3>
      </div>





      <h2>{this.state.manhattan.name}</h2>
      <h2>{this.state.gin_and_tonic.name}</h2>
      <h2>{this.state.mojito.name}</h2>
      <h2>{this.state.martini.name}</h2>
    </div>
  );
}
}

export default App;
