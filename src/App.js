import React from 'react';
import axios from 'axios'
import './App.css';
import NewForm from './components/NewForm';
import Show from './components/Show';
import Modal from './components/Modal'


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
     hideShowForm: false,
     drinkName: '',
     ingredientSearch: '',
     isShowing: false
    }
    
    this.getCocktails = this.getCocktails.bind(this)
    this.deleteCocktail = this.deleteCocktail.bind(this)
    this.getCocktail = this.getCocktail.bind(this)
    this.handleAddCocktail = this.handleAddCocktail.bind(this);
    this.revealFavorite = this.revealFavorite.bind(this);
    this.getRandomCocktail = this.getRandomCocktail.bind(this)
    this.revealNewForm= this.revealNewForm.bind(this)
    this.hideShowCard = this.hideShowCard.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.searchName = this.searchName.bind(this)
    this.searchIngredient = this.searchIngredient.bind(this)
    this.openModalHandler=this.openModalHandler.bind(this)
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
    this.openModalHandler()
  }

  async searchName(event){
    event.preventDefault();
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.drinkName}`)
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
    console.log(this.state.drinkName)
  }

  async searchIngredient(event){
    event.preventDefault();
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.ingredientSearch}`)
    const cocktailName = response.data.drinks[Math.floor(Math.random() * response.data.drinks.length)].strDrink
    const nameResponse = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    const data = nameResponse.data
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
    console.log(this.state.ingredientSearch)
  }

  getCocktail(cocktail) {
    this.setState({ 
      cocktail: cocktail ,
      isCocktailSet: true, 
      display: 'hideFavorite'
    })
  }

  async revealFavorite(cocktail) {
    const copyCocktail = cocktail;
    if (cocktail.favorite) {
      copyCocktail.favorite = false
    } else {
      copyCocktail.favorite = true
    }
    console.log(`${baseURL}/cocktails/${cocktail._id}`);
    await axios.put(`${baseURL}/cocktails/${cocktail._id}`, copyCocktail)
    this.setState({
      cocktail: copyCocktail
    })
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

    handleChange(event) {
    this.setState({ 
      drinkName: event.target.value, 
      ingredientSearch: event.target.value
    })
  }

  openModalHandler =(id)=>{
    const filteredCocktails = this.state.cocktails.filter(cocktail =>{
      return cocktail._id ===id;
    })
    this.setState({
      cocktails: filteredCocktails,
      isShowing: true,
    })
  }
  closeModalHandler=()=>{
    this.setState({
      isShowing: false
    })
  }

  render() {
  return (
    <div className="container">
      <header>
        <h1>Bar None</h1>
      </header>
      <a className="waves-effect waves-light btn" id="add" onClick={()=> this.revealNewForm()}>Add a drink</a>
      <a className="waves-effect waves-light btn" id="random" onClick={()=> this.getRandomCocktail()}>Give me a random cocktail!</a>
      {this.state.isAddButtonClicked && <NewForm 
      handleAddCocktail={this.handleAddCocktail}
      />}
      <form onSubmit={this.searchName}>
      <input onChange={this.handleChange} type='text'id='drinkName' placeholder='search for drink'></input>
      {/* defaultValue={this.state.drinkName} */}
      <input onClick={this.openModalHandler} type='submit' className="waves-effect waves-light btn" value='search by name'></input>
      </form>
      <form onSubmit={this.searchIngredient}>
      <input onChange={this.handleChange} type='text'id='drinkName' placeholder='search for drink'></input>
      {/* defaultValue={this.state.drinkName} */}
      <input onClick={this.openModalHandler} type='submit' className="waves-effect waves-light btn" value='search by ingredient'></input>
      </form>
      <div className="row">

      { 
            this.state.cocktails.map(cocktail => {
              return (
                <div className="col s12 m4 l3">
      <div className="card" onClick={this.openModalHandler}>
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
      <div className="modalStyling">
        <Modal
        searchName={this.searchName}
        searchIngredient = {this.searchIngredient}
        className="modal"
        show={this.state.isShowing}
        close={this.closeModalHandler}
        >

      <div className = "show">
              {this.state.isCocktailSet && <Show hideShowCard={this.hideShowCard} searchName={this.searchName} searchIngredient = {this.searchIngredient} getRandomCocktail={this.getRandomCocktail} display={this.state.display} revealFavorite={this.revealFavorite} cocktail ={this.state.cocktail}/>}
              </div>
    </Modal>
    </div>
    </div>
  );
}
}

export default App;


