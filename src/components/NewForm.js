import React, { Component } from 'react';
import axios from 'axios';

let baseURL = process.env.REACT_APP_BASEURL;

if(process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'https://fathomless-sierra-68956.herokuapp.com';
}

    class NewForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                img: '',
                alcoholic: '', 
                glass: '',
                ingredients: [],
                ingredients2: [],
                ingredients3: [],
                ingredients4: [],
                instructions: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            
        }
        handleChange(event) {
            this.setState({ [event.currentTarget.id]: event.currentTarget.value })
        }
        async handleSubmit(event) {
            event.preventDefault();
            const response = await axios.post(`${baseURL}/cocktails`, {
                name: this.state.name,
                img: this.state.img,
                alcoholic: this.state.alcoholic,
                glass: this.state.glass,
                ingredients: this.state.ingredients,
                ingredients2: this.state.ingredients2,
                ingredients3: this.state.ingredients3,
                ingredients4: this.state.ingredients4,
                instructions: this.state.instructions
            })
            this.props.handleAddCocktail(response.data);
        }
        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name' />
                    <input 
                    type='text'
                    id='name'
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder='name of drink'
                    />
                     <input 
                    type='text'
                    id='img'
                    onChange={this.handleChange}
                    value={this.state.img}
                    placeholder='enter image url'
                    />
                    <input 
                    type='text'
                    id='alcoholic'
                    onChange={this.handleChange}
                    value={this.state.alcoholic}
                    placeholder='alcoholic or non alcoholic?'
                    />
                    <input 
                    type='text'
                    id='glass'
                    onChange={this.handleChange}
                    value={this.state.glass}
                    placeholder='what glass?'
                    />
                    <input 
                    type='text'
                    id='ingredients'
                    onChange={this.handleChange}
                    defaultValue={this.state.ingredients}
                    placeholder='what do you need?'
                    />

                    <input 
                    type='text'
                    id='ingredients2'
                    onChange={this.handleChange}
                    defaultValue={this.state.ingredients2}
                    placeholder='what other ingredients?'
                    />

                    <input 
                    type='text'
                    id='ingredients3'
                    onChange={this.handleChange}
                    defaultValue={this.state.ingredients3}
                    placeholder='what other ingredients?'
                    />

                    <input 
                    type='text'
                    id='ingredients4'
                    onChange={this.handleChange}
                    defaultValue={this.state.ingredients4}
                    placeholder='what other ingredients?'
                    />



                    <input 
                    type='text'
                    id='instructions'
                    onChange={this.handleChange}
                    value={this.state.instructions}
                    placeholder='How are you going to make it?'
                    />
                    <input type='submit'
                    value='Add a drink!'
                    />
                </form>
            )
            }
        }


export default NewForm;