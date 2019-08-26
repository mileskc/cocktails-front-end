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
     name: '',
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
  }

  async handleSubmit(){
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
    this.setState({ drinkName: event.target.value })
  }
  openModalHandler =(id)=>{
    const filteredCocktails = this.state.cocktails.filter(cocktail =>{
      return cocktail._id ===id;
    })
    this.setState({
      cocktails: filteredCocktails,
      isShowing: true
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
      <button onClick={()=> this.revealNewForm()}>Add a drink</button>
      {this.state.isAddButtonClicked && <NewForm 
      handleAddCocktail={this.handleAddCocktail}
      />}
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type='text'id='drinkName' defaultValue={this.state.drinkName} placeholder='search for drink'></input>
      <input onClick={() => this.handleSubmit()} type='submit' value='search by name'></input>
      </form>
      <button onClick={()=> this.getRandomCocktail()}>Give me a random cocktail!</button>
      <div className="row">
      { 
            this.state.cocktails.map(cocktail => {
              return (
                <div className="col s12 m7 l4">
                  { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
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
      <Modal
       className="modal"
       show={this.state.isShowing}
       close={this.closeModalHandler}
>
      <div className = "show">
              {this.state.isCocktailSet && <Show hideShowCard={this.hideShowCard} handleSubmit={this.handleSubmit} getRandomCocktail={this.getRandomCocktail} display={this.state.display} revealFavorite={this.revealFavorite} cocktail ={this.state.cocktail}/>}
              </div>
  
        </Modal>
    </div>
  );
}
}

export default App;






