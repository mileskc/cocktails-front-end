import React from 'react';
import axios from 'axios'
import './App.css';
import NewForm from './components/NewForm';
import Show from './components/Show';


let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     display: 'hideFavorite',
     cocktails: [],
     isCocktailSet: false, 
     cocktail: {},
     isAddButtonClicked: false,
     hideShowForm: false
    }
    
    this.getCocktails = this.getCocktails.bind(this)
    this.deleteCocktail = this.deleteCocktail.bind(this)
    this.getCocktail = this.getCocktail.bind(this)
    this.handleAddCocktail = this.handleAddCocktail.bind(this);
    this.revealFavorite = this.revealFavorite.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this)
    this.getRandomCocktail = this.getRandomCocktail.bind(this)
    this.revealNewForm= this.revealNewForm.bind(this)
    this.hideShowCard = this.hideShowCard.bind(this)
  }
  
  componentDidMount() {
    this.getCocktails()
  }

  async getCocktails(){
    const response = await axios.get(`${baseURL}/cocktails`)
    const cocktails = response.data
    
    this.setState({ cocktails: cocktails })
  }

  async getRandomCocktail(){
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const data = response.data
    this.setState({
      cocktail: {
        name: data.drinks[0].strDrink,
        img: data.drinks[0].strDrinkThumb,
        alcoholic: data.drinks[0].strAlcoholic,
        glass: data.drinks[0].strGlass,
        ingredients: [data.drinks[0].strIngredient1,
        data.drinks[0].strIngredient2,
        data.drinks[0].strIngredient3,
        data.drinks[0].strIngredient4,
        data.drinks[0].strIngredient5,
        data.drinks[0].strIngredient6,
        data.drinks[0].strIngredient7,
        data.drinks[0].strIngredient8,
        data.drinks[0].strIngredient9,
        data.drinks[0].strIngredient10,
        data.drinks[0].strIngredient11,
        data.drinks[0].strIngredient12,
        data.drinks[0].strIngredient13,
        data.drinks[0].strIngredient14,
        data.drinks[0].strIngredient15],
        instructions: data.drinks[0].strInstructions
      },
      isCocktailSet: true
    })
  }

  getCocktail(cocktail) {
    this.setState({ 
      cocktail: cocktail ,
      isCocktailSet: true, 
      display: 'hideFavorite',

    })
  }

  async toggleFavorite(selectedCocktail) {
    await axios.put(`${baseURL}/cocktails/${selectedCocktail._id}`, { favorite: !selectedCocktail.favorite })
    const updatedCocktail = this.state.cocktails.map(cocktail =>{
      if (cocktail._id === selectedCocktail._id) {
        cocktail.favorite = !cocktail.favorite;
        return cocktail;
      } else {
        return cocktail;
      }
    })
    console.log(updatedCocktail)
    this.setState({
      cocktails: updatedCocktail
    })
  }

  revealFavorite() {
    if (this.state.display === 'showFavorite') {
      this.setState({
        display: 'hideFavorite'
      })
    } else if (this.state.display === 'hideFavorite') {
      this.setState({
        display: 'showFavorite'
      })
    }
    this.toggleFavorite(this.state.cocktails)
  }

  revealNewForm() {
    if(this.state.isAddButtonClicked === false) {
    this.setState({
    isAddButtonClicked: true
  })
  } else if (this.state.isAddButtonClicked === true) {
    this.setState({
      isAddButtonClicked: false
    })
  }
}

  hideShowCard() {
    this.setState({
        hideShowForm: true
    })
  }

  handleAddCocktail(cocktail) {
    this.setState({
      cocktails: [...this.state.cocktails, cocktail]
    })
  }

  async deleteCocktail(id) {
    await axios.delete(`${baseURL}/cocktails/${id}`)
    const filteredCocktails = this.state.cocktails.filter((cocktail) => {
      return cocktail._id !== id
    })
  
    this.setState({
      cocktails: filteredCocktails
    })
  }

  render() {
  return (
    <div className="container">
      <header>
        <h1>Bar None</h1>
      </header>
      <button onClick={()=> this.revealNewForm()}>Add a drink</button>
      {this.state.isAddButtonClicked && <NewForm 
      handleAddCocktail={this.handleAddCocktail}
      />}
      <button onClick={()=> this.getRandomCocktail()}>Give me a random cocktail!</button>
      <div class="row">
      { 
            this.state.cocktails.map(cocktail => {
              return (
                <div className="col s12 m7 l4">
      <div className="card">
                <div key={cocktail._id} onClick={()=> this.getCocktail(cocktail)} className = "drink">
                  <div className="card-image">
                  <img src={cocktail.img}/>
                  </div>
                  <div className="card-content">
                  <h2> {cocktail.name} </h2>
                  </div>
                  <div className="card-action">
                  <a className="waves-effect waves-light btn" onClick={()=>this.deleteCocktail(cocktail._id)}>Delete</a>
                  </div>
                </div>
              </div>
              </div>
              )
            })
          }
      </div>
      <div className = "show">
              {this.state.isCocktailSet && <Show hideShowCard={this.hideShowCard} getRandomCocktail={this.getRandomCocktail} display={this.state.display} revealFavorite={this.revealFavorite} cocktail ={this.state.cocktail}/>}
              </div>
    </div>
  );
}
}

export default App;