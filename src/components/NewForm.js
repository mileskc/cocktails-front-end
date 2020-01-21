
import React, { Component } from 'react';
import axios from 'axios';

let baseURL = process.env.REACT_APP_BASEURL;

if(process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003';
} else {
    baseURL = 'https://cryptic-chamber-65846.herokuapp.com';
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
                ing1: '',
                ing2: '',
                ing3: '',
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
            const allIngredients = []
            allIngredients.push(this.state.ing1, this.state.ing2, this.state.ing3)
            const response = await axios.post(`${baseURL}/cocktails`, {
                name: this.state.name,
                img: this.state.img,
                alcoholic: this.state.alcoholic,
                glass: this.state.glass,
                ingredients: allIngredients,
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
                    defaultValue={this.state.glass}
                    placeholder='what glass?'
                    />
                    <input 
                    type='text'
                    id='ing1'
                    onChange={this.handleChange}
                    defaultValue={this.state.ing1}
                    placeholder='what is your first ingredient?'
                    />

                    <input 
                    type='text'
                    id='ing2'
                    onChange={this.handleChange}
                    defaultValue={this.state.ing2}
                    placeholder='what is your second ingredient?'
                    />

                    <input 
                    type='text'
                    id='ing3'
                    onChange={this.handleChange}
                    defaultValue={this.state.ing3}
                    placeholder='what is your third ingredient?'
                    />  

                    <input 
                    type='text'
                    id='instructions'
                    onChange={this.handleChange}
                    value={this.state.instructions}
                    placeholder='How do you make it?'
                    />
                    <input className="waves-effect waves-light btn" type='submit'
                    value='Submit drink!'
                    />
                </form>
            )
            }
        }


export default NewForm;