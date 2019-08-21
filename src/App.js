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
     cocktail: {}
    }
    this.getCocktails = this.getCocktails.bind(this)
    // this.getCocktail = this.getCocktail.bind(this)
  }
  
  componentDidMount() {
    this.getCocktails()
  }

  async getCocktails(){
    const response = await axios.get(`${baseURL}/cocktails`)
    const cocktails = response.data
    
    this.setState({ cocktails: cocktails })
  }

  // getCocktail(cocktail) {
  //   this.setState({ 
  //     cocktail: cocktail ,
  //   })
  // }

  render() {
  return (
    <div className="container">
      <h1>Test Header</h1>
      <div className="info">
      { 
            this.state.cocktails.map(cocktail => {
              return (
                <div>
                  <h2> {cocktail.name} </h2>
                  <h3>X</h3>
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