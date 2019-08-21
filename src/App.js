import React from 'react';
import axios from 'axios';
import './App.css';
let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      cocktail: {},

        margarita: {},
        manhattan: {},
        gin_and_tonic: {},
        mojito: {},
        martini: {}
      
    };
  }

  // async getCocktails(){
  //   const response = await axios.get(`${baseURL}/cocktails`)
  //   const cocktails = response.data
    
  //   this.setState({ cocktails: cocktails })
  // }

  // getHoliday(cocktail) {
  //   this.setState({ 
  //     cocktail: cocktail
  //   })
  // }

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
    //   // cocktail: {
    //   //   name: Data.drinks[0].strDrink,
    //   //   alcoholic: Data.drinks[0].strAlcoholic,
    //   //   glass: Data.drinks[0].strGlass,
    //   //   instructions: Data.drinks[0].strInstructions,
    //   //   ingredients: [
    //   //     Data.drinks[0].strIngredient1,
    //   //     Data.drinks[0].strIngredient2,
    //   //   ]
    //   // }
    //   // ,

  })

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


export default App;



//     margarita: 
    //     {
    //     name: margData.drinks[0].strDrink,
    //     alcoholic: margData.drinks[0].strAlcoholic,
    //     glass: margData.drinks[0].strGlass,
    //     instructions: margData.drinks[0].strInstructions,
    //     ingredients: [
    //       margData.drinks[0].strIngredient1,
    //       margData.drinks[0].strIngredient2,
    //       margData.drinks[0].strIngredient3,
    //       margData.drinks[0].strIngredient4,
    //       margData.drinks[0].strIngredient5,
    //       margData.drinks[0].strIngredient6,
    //       margData.drinks[0].strIngredient7,
    //       margData.drinks[0].strIngredient8,
    //       margData.drinks[0].strIngredient9,
    //       margData.drinks[0].strIngredient10,
    //       margData.drinks[0].strIngredient11,
    //       margData.drinks[0].strIngredient12,
    //       margData.drinks[0].strIngredient13,
    //       margData.drinks[0].strIngredient14,
    //       margData.drinks[0].strIngredient15
    //     ]
    //   }
    // ,
    
    //     manhattan: {
    //     name: manhattanData.drinks[0].strDrink,
    //     alcoholic: manhattanData.drinks[0].strAlcoholic,
    //     glass: manhattanData.drinks[0].strGlass,
    //     instructions: manhattanData.drinks[0].strInstructions,
    //     ingredients: [
    //       manhattanData.drinks[0].strIngredient1,
    //       manhattanData.drinks[0].strIngredient2,
    //       manhattanData.drinks[0].strIngredient3,
    //       manhattanData.drinks[0].strIngredient4,
    //       manhattanData.drinks[0].strIngredient5,
    //       manhattanData.drinks[0].strIngredient6,
    //       manhattanData.drinks[0].strIngredient7,
    //       manhattanData.drinks[0].strIngredient8,
    //       manhattanData.drinks[0].strIngredient9,
    //       manhattanData.drinks[0].strIngredient10,
    //       manhattanData.drinks[0].strIngredient11,
    //       manhattanData.drinks[0].strIngredient12,
    //       manhattanData.drinks[0].strIngredient13,
    //       manhattanData.drinks[0].strIngredient14,
    //       manhattanData.drinks[0].strIngredient15
    //     ]
    //   }
    // },
    //     gin_and_tonic: {
    //     name: ginData.drinks[0].strDrink,
    //     alcoholic: ginData.drinks[0].strAlcoholic,
    //     glass: ginData.drinks[0].strGlass,
    //     instructions: ginData.drinks[0].strInstructions,
    //     ingredients: [
    //       ginData.drinks[0].strIngredient1,
    //       ginData.drinks[0].strIngredient2,
    //       ginData.drinks[0].strIngredient3,
    //       ginData.drinks[0].strIngredient4,
    //       ginData.drinks[0].strIngredient5,
    //       ginData.drinks[0].strIngredient6,
    //       ginData.drinks[0].strIngredient7,
    //       ginData.drinks[0].strIngredient8,
    //       ginData.drinks[0].strIngredient9,
    //       ginData.drinks[0].strIngredient10,
    //       ginData.drinks[0].strIngredient11,
    //       ginData.drinks[0].strIngredient12,
    //       ginData.drinks[0].strIngredient13,
    //       ginData.drinks[0].strIngredient14,
    //       ginData.drinks[0].strIngredient15
    //     ]
    // },
    //     mojito: {
    //     name: mojitoData.drinks[0].strDrink,
    //     alcoholic: mojitoData.drinks[0].strAlcoholic,
    //     glass: mojitoData.drinks[0].strGlass,
    //     instructions: mojitoData.drinks[0].strInstructions,
    //     ingredients: [
    //       mojitoData.drinks[0].strIngredient1,
    //       mojitoData.drinks[0].strIngredient2,
    //       mojitoData.drinks[0].strIngredient3,
    //       mojitoData.drinks[0].strIngredient4,
    //       mojitoData.drinks[0].strIngredient5,
    //       mojitoData.drinks[0].strIngredient6,
    //       mojitoData.drinks[0].strIngredient7,
    //       mojitoData.drinks[0].strIngredient8,
    //       mojitoData.drinks[0].strIngredient9,
    //       mojitoData.drinks[0].strIngredient10,
    //       mojitoData.drinks[0].strIngredient11,
    //       mojitoData.drinks[0].strIngredient12,
    //       mojitoData.drinks[0].strIngredient13,
    //       mojitoData.drinks[0].strIngredient14,
    //       mojitoData.drinks[0].strIngredient15
    //     ]
    // },
    //     martini: {
    //     name: martiniData.drinks[0].strDrink,
    //     alcoholic: martiniData.drinks[0].strAlcoholic,
    //     glass: martiniData.drinks[0].strGlass,
    //     instructions: martiniData.drinks[0].strInstructions,
    //     ingredients: [
    //       martiniData.drinks[0].strIngredient1,
    //       martiniData.drinks[0].strIngredient2,
    //       martiniData.drinks[0].strIngredient3,
    //       martiniData.drinks[0].strIngredient4,
    //       martiniData.drinks[0].strIngredient5,
    //       martiniData.drinks[0].strIngredient6,
    //       martiniData.drinks[0].strIngredient7,
    //       martiniData.drinks[0].strIngredient8,
    //       martiniData.drinks[0].strIngredient9,
    //       martiniData.drinks[0].strIngredient10,
    //       martiniData.drinks[0].strIngredient11,
    //       martiniData.drinks[0].strIngredient12,
    //       martiniData.drinks[0].strIngredient13,
    //       martiniData.drinks[0].strIngredient14,
    //       martiniData.drinks[0].strIngredient15
    //     ]
    // }
    // });