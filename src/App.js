import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
  name: ''
    }
  }
  async componentDidMount() {
    const response = await axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const data = response.data;
    this.setState({
        name: data.drinks[0].strDrink

    })
  }
  render() {
  return (
    <div className="container">
      <h1>Test Header</h1>
      <h2>{this.state.name}</h2>
    </div>
  );
}
}

export default App;
