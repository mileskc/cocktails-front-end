import React from 'react';
import axios from 'axios'
import './App.css';

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     cocktails: [],
     isCocktailSet: false, 
     cocktail: {}
    }
    
    this.getCocktails = this.getCocktails.bind(this)
    this.deleteCocktail = this.deleteCocktail.bind(this)
    this.getCocktail = this.getCocktail.bind(this)
  }
  
  componentDidMount() {
    this.getCocktails()
  }

  async getCocktails(){
    const response = await axios.get(`${baseURL}/cocktails`)
    const cocktails = response.data
    
    this.setState({ cocktails: cocktails })
  }

  getCocktail(cocktail) {
    this.setState({ 
      cocktail: cocktail ,
      isCocktailSet: true 
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
        <h1>Cocktails!</h1>
      </header>
      <div className="info">
      { 
            this.state.cocktails.map(cocktail => {
              return (
                <div className = "drink">
                  <h2> {cocktail.name} </h2>
                  <h3 onClick={()=>this.deleteCocktail(cocktail._id)}>X</h3>
                </div>
              )
            })
          }
      </div>
    </div>
  );
}
}

export default App;